const express = require('express');
const app = express();
const logger = require('morgan');

const PORT = 3000;

/**
 * Express middleware.
 */
// parses incoming requests with JSON payloads
app.use(express.json());

// Logger middleware
app.use(logger('dev'));

// Router middleware
const personRouter = require('./routes/personRouters');

// Add this after the middleware part
app.use(personRouter);

function onServerStart() {
    console.log(`Server listening on port ${PORT}`);
}

app.listen(PORT, onServerStart);

module.exports = app;