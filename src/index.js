const fs = require("fs");
const readline = require("readline");
const dotenv = require("dotenv");

const { extractUrls } = require("./utils/utils");
const { setupEventProcessor } = require("./utils/eventProcessor");

dotenv.config();

const SECRET = process.env.IM_SECRET;

const seenUrls = new Set();
const urlQueue = [];
const retryQueue = [];
const reqs = {};

if (!SECRET) {
    console.error("IM_SECRET environment variable is not set.");
    process.exit(1);
}

async function main() {
    const args = process.argv.slice(2);
    setupEventProcessor(urlQueue, retryQueue, reqs, args.length === 0);
    if (args.length === 0) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false,
        });

        rl.on("line", async (line) => {
            await extractUrls(line, seenUrls, urlQueue);
        });

        rl.on("close", () => {
            console.log("done");
            process.exit(1)
        });
    } else {
        const filePath = args[0];
        fs.readFile(filePath, "utf-8", async (err, data) => {
            if (err) {
                console.error(`Failed to read file: ${err.message}`);
                process.exit(1);
            }
            const lines = data.split("\n");
            console.log(lines);
            for (const line of lines) {
                await extractUrls(line, seenUrls, urlQueue);
            }
        });
    }
}

main();