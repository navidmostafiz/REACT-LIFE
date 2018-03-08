var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, '/views/index.html'),
});

var CleanWebpackPluginConfig = new CleanWebpackPlugin(['build'], {
    root: __dirname,
    verbose: true,
})

new CleanWebpackPlugin(['dist'], {
    root: path.join(__dirname, 'public'),
    verbose: true,
}),


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
        plugins: [/*CleanWebpackPluginConfig,*/ HtmlWebpackPluginConfig]
    };

console.log(path.resolve(__dirname + '/build/bundled.js'));