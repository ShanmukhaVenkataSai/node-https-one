const fs = require('fs');
const http = require('http');
const https = require('https');

const util = require('util');

var express = require('express');
var app = express();

// your express configuration here

const port = process.env.PORT || 8080

const httpServer = http.createServer(app);


httpServer.listen(port,()=>{
    console.log(`http server started on port ${httpServer.address().address}:${port}`);
});


// var httpServer = http.createServer(app);
// // var httpsServer = https.createServer(credentials, app);

// httpServer.listen(8080, () => {
//     console.log('http server started on port 8080');
// });
// httpsServer.listen(8443, () => {
//     console.log('https server started on port 8443');
// });

app.get('/', (req, res) => {

    console.log(req.socket.getPeerCertificate(true));

    res.send('working...')
})