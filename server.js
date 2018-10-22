// Express is used as web server.
const express = require('express');
const path = require('path');

const app = express();

// Serve static content from the dist folder.
app.use(express.static('dist'));

app.get('/*', function(req,res) {
    res.sendFile('index.html');
});

// The app listens on Heroku default port. 
app.listen(process.env.PORT || 8080);