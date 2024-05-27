const EventEmitter = require("events");
const { makeHttpRequest, parseResponse, hashEmail } = require("./requestHandler");

const urlEmitter = new EventEmitter();

const finalResult = [];
const finalFails = [];

function setupEventProcessor(urlQueue, retryQueue, reqs, stdinInput) {
    urlEmitter.on("sendRequest", async () => {
        if (urlQueue.length > 0) {
            const urlObject = urlQueue.shift();
            await processUrl(urlObject, reqs, retryQueue);
        }
        while (retryQueue.length > 0 && retryQueue[0].timestamp <= Date.now()) {
            const retryUrl = retryQueue.shift();
            urlQueue.push(retryUrl);
        }
    });

    setInterval(() => {
        urlEmitter.emit("sendRequest");
        if (
            !stdinInput &&
            urlQueue.length === 0 &&
            retryQueue.length === 0 &&
            !Object.keys(reqs).some((key) => reqs[key] === true)
        )
            process.exit(1);
    }, 1000);
}

async function processUrl(urlObject, reqs, retryQueue) {
    const { url, timestamp } = urlObject;
    try {
        reqs[url] = true;
        const { data, url: requestUrl } = await makeHttpRequest(url);
        const { title, email } = parseResponse(data);
        const result = { url: requestUrl };
        if (title) result.title = title;
        if (email) result.email = hashEmail(email);
        console.log(JSON.stringify(result));
        finalResult.push(JSON.stringify(result));
    } catch (error) {
        let errMessage = `Failed to fetch ${url}: ${error.message}.${timestamp ? " Retrying in 60 seconds..." : ""}`
        if (!timestamp) retryQueue.push({ url, timestamp: Date.now() + 60*1000 });
        else finalFails.push(errMessage);
        
        console.error(errMessage);
    } finally {
        reqs[url] = false;
    }
}

process.on("exit", () => {
    console.log("######################################");
    console.log(finalResult.join("\n"));
    console.log("\nFAILS:");
    console.log(finalFails.join("\n"));
    console.log("######################################");
});

module.exports = {
    setupEventProcessor,
};
