import { readFile } from "fs";
import { createInterface } from "readline";

import { extractUrls } from "./utils/utils.js";
import { setupEventProcessor } from "./utils/eventProcessor.js";

const seenUrls = new Set();
const urlQueue = [];
const retryQueue = [];
const reqs = {};

async function main() {
    const args = process.argv.slice(2);
    setupEventProcessor(urlQueue, retryQueue, reqs, args.length === 0);
    if (args.length === 0) {
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false,
        });

        rl.on("line", async (line) => {
            await extractUrls(line, seenUrls, urlQueue);
        });

        rl.on("close", () => {
            console.log("done");
            process.exit(0)
        });
    } else {
        const filePath = args[0];
        readFile(filePath, "utf-8", async (err, data) => {
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