const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());

require('./routes/api')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
