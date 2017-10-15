'use strict';
const port = 3000;
const secrets = require('../src/secrets');
const express = require('express');
const app = express();
const instaPhoto = require('../index.js')
app.use(express.static(__dirname));

app.get('/photos', function(req, res) {
    instaPhoto.getPhotos({
        userId: secrets.userId,
        accessToken: secrets.accessToken
    })
    .then(photos => {
        return res.json(photos);
    });
});

app.listen(port, function() {
    console.log('Gcal Events up and running');
});