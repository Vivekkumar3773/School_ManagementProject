const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Define your routes
router.get('/example', (req, res) => {
    res.json({ message: 'Hello from Netlify Function!' });
});

app.use('/.netlify/functions/example', router);

module.exports.handler = serverless(app);
