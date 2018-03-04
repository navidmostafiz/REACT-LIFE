const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const path = require('path');

const express = require('express');
//const open = require('open');

const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
//app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, 'build/indexx.html'));
});

server.listen(port);
console.log("sever started on port: ", port);