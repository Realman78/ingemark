const dotenv = require('dotenv');
dotenv.config();

const SECRET = process.env.IM_SECRET;

if (!SECRET) {
    console.error("IM_SECRET environment variable is not set.");
    process.exit(1);
}

module.exports = {
    SECRET
};
