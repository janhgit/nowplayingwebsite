const express = require('express');
const path = require('path');

const spotifyClientID = "fa853e3f05bf4ca4a5b4ccd2ee49b065"
const spotifyClientSecret = "8046e09f7a6b4a9c8ee5495b3194f0cc"

const app = express();
const port =  8000;


app.use(express.static('public'))


app.listen(port);
console.log('Server started at http://localhost:' + port);