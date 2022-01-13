const dotenv = require('dotenv');
dotenv.config();
console.log('Url: ' + process.env.AUTH_API_INTERNAL_URL);
module.exports = {
    RECIPIEN_API_INTERNAL_URL: process.env.RECIPIEN_API_INTERNAL_URL,
    AUTH_API_INTERNAL_URL: process.env.AUTH_API_INTERNAL_URL
};