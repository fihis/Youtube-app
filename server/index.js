const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fetch = require('node-fetch');

require('dotenv').config();

const app = express();

app.use(morgan('tiny'));
app.use(cors());
 
// url be like 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=skateboarding%20dog&type=video&videoDefinition=high&key=[YOUR_API_KEY]'

app.get('/videos', (req, res) => {
    fetch(url)
        .then(responce => responce.json())
        .then(json => {
            res.json(json);
        })
});

function notFound(req, res, next) {
    const error = new Error('Not found');
    res.status(404);
    next(error);
}

function errorHandler(error, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: error.message
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port', port);
});