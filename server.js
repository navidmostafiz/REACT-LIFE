const http = require('http');
const app = require('./index');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
console.log("sever started on port: ", port)