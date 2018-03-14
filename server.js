const express = require('express');
const http = require('http');
//var cors = require('cors');
//const app = require('./app');
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const path = require('path');
console.log('server started with webpack');
//const express = require('express');
//const open = require('open');
//app.use(require('webpack-hot-middleware')(compiler));

const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//Add this middleware to Express to return .js.gz so you can still load bundle.js from the html but will receive bundle.js.gz
app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});

app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, 'build/index.html'));
});

server.listen(port);
console.log("sever started on port: ", port);

//"proxy": "http://localhost:5000/"
//const API_URL = "http://127.0.0.1:5000/api/";
//"proxy": "http://127.0.0.1:5000/"
