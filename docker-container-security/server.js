const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');

const options = {
  key: fs.readFileSync('/certs/app-key.pem'),
  cert: fs.readFileSync('/certs/app-cert.pem'),
  requestCert: true,
  rejectUnauthorized: true,
  ca: [fs.readFileSync('/certs/ca-cert.pem')],
};

app.get('/', (req, res) => {
  res.send('Hello, secure world!');
});

const server = https.createServer(options, app);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
