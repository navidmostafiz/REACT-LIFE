const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

// import express from 'express';
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
// import open from 'open';

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
//app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/indexx.html'));
});

server.listen(port);
console.log("sever started on port: ", port);