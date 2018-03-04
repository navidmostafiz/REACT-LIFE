var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: __dirname + '/views/index.html',
});


module.exports = {
    entry: './modules/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'bundled.js',
        path: __dirname + '/build/',
    },
    plugins: [HtmlWebpackPluginConfig]
};

console.log(path.resolve(__dirname + '/build/bundled.js'));