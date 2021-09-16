const fs = require('fs');
const http = require('http');
const https = require('https');

const util = require('util');


var privateKey = fs.readFileSync('sslcert/rootCAKey.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/rootCACert.pem', 'utf8');


var credentials = { key: privateKey, cert: certificate, requestCert: true, rejectUnauthorized: false };
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, () => {
    console.log('http server started on port 8080');
});
// httpsServer.listen(8443, () => {
//     console.log('https server started on port 8443');
// });

app.post('/', (req: any, res: any) => {

    console.log(req.socket.getPeerCertificate(true).raw.toString('base64'));

    const data = util.inspect(req.socket.getPeerCertificate(true), { colors: true })

    console.log(data, 'data')
    res.send('working...')
})