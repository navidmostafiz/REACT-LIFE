//var HTMLWebpackPlugin = require('html-webpack-plugin');
//var HTMLWebpackPluginConfig = new HTMLWebpackPlugin();



module.exports = {
    entry: __dirname + '/app.js',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    output:{
        filename: 'bundled.js',
        path: __dirname+'/build'
    },
};