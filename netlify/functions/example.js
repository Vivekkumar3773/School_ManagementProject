const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Access environment variables
const dbUrl = process.env.DB_URL;
const apiKey = process.env.API_KEY;
const baseUrl = process.env.BASE_URL;

// Define your routes
router.get('/example', (req, res) => {
    res.json({
        message: 'Hello from Netlify Function!',
        dbUrl,
        apiKey,
        baseUrl
    });
});

app.use('/.netlify/functions/example', router);

module.exports.handler = serverless(app);
