var HtmlWebpackPlugin = require('html-webpack-plugin'); //moves html to build folder
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
//var CleanWebpackPlugin = require('clean-webpack-plugin'); //cleans build folder
//var ExtractTextPlugin = require("extract-text-webpack-plugin"); //ectracts css or others from bundle and creates separate file in build folder
var path = require('path');


var pluginConfigs = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, '/views/index.html'),
    }),
    new HtmlWebpackIncludeAssetsPlugin({ assets: ['.css'], append: false }),
    // new CleanWebpackPlugin(['build'], {
    //     root: __dirname,
    //     verbose: true,
    // }),
    // new ExtractTextPlugin('styles.css'),
];

module.exports = {
    entry: './modules/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader',
                // query: {
                //     modules: true,
                //     localIdentName: '[name]__[local]___[hash:base64:5]'
                // }
            },
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader"
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