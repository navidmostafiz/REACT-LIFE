const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //moves html to build folder
//var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
//var CleanWebpackPlugin = require('clean-webpack-plugin'); //cleans build folder
// var ExtractTextPlugin = require("extract-text-webpack-plugin"); //ectracts css or others from bundle and creates separate file in build folder
'style-loader' // css parse
'css-loader' // css parse
// var CompressionPlugin = require('compression-webpack-plugin');
var path = require('path');
console.log('webpack.config loaded');

var pluginConfigs = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, '/views/index.html'),
    }),
    //new HtmlWebpackIncludeAssetsPlugin({ assets: ['.css'], append: false }),
    // new CleanWebpackPlugin(['build'], {
    //     root: __dirname,
    //     verbose: true,
    // }),
    // new ExtractTextPlugin({
    //     filename: 'styles.css',
    //     disable: false,
    //     allChunks: true
    // }),
    // new CompressionPlugin({
    //     asset: '[path].gz[query]',
    //     algorithm: 'gzip',
    //     test: /\.js$|\.css$|\.html$/,
    //     threshold: 10240,
    //     minRatio: 0.8,
    // }),
    //new webpack.optimize.CommonsChunkPlugin(options),
];

//webpack: v4
module.exports = {
    entry: './modules/index.js',
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], //use this when not using extract webpack plugin
            },
            // {
            //     test: /\.css$/,
            //     //loaders: ExtractTextPlugin.extract(['style-loader', 'css-loader']),
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader",
            //         publicPath: "/build"
            //     })
            // },
        ]
    },
    output: {
        filename: 'bundled.js',
        path: __dirname + '/build/',
    },
    plugins: pluginConfigs
};

console.log(path.join(__dirname, '/views/index.html'));