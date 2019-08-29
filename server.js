const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();


var bodyParser = require('body-parser');

// Certificate
// const privateKey = fs.readFileSync('/etc/letsencrypt/live/www.climate-silo.info/privkey.pem', 'utf8');
// const certificate = fs.readFileSync('/etc/letsencrypt/live/www.climate-silo.info/cert.pem', 'utf8');
// const ca = fs.readFileSync('/etc/letsencrypt/live/www.climate-silo.info/chain.pem', 'utf8');
//
// const credentials = {
// 	key: privateKey,
// 	cert: certificate,
// 	ca: ca
// };
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());

require('./routes/api')(app);

// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

// httpServer.listen(80, () => {
// 	console.log('HTTP Server running on port 80');
// });

// httpsServer.listen(443, () => {
// 	console.log('HTTPS Server running on port 443');
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
