import axios from 'axios';
import crypto from 'crypto';
import { SECRET } from '../config/config.js';

async function makeHttpRequest(url) {
    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }

    const res = await axios.get(url, { timeout: 5000 });
    if (res.status === 200) {
        return { data: res.data, url };
    }
    throw new Error("Failed to fetch");
}

function parseResponse(data) {
    const titleMatch = data.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : null;
    const emailMatch = data.match(
        /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    );
    const email = emailMatch ? emailMatch[0].toString() : null;
    return { title, email };
}

function hashEmail(email) {
    return crypto.createHmac("sha256", SECRET).update(email).digest("hex");
}

export {
    makeHttpRequest,
    parseResponse,
    hashEmail
};
