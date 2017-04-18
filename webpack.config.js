/**
 * Created by Prateek on 4/17/2017.
 */
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});
module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
        /*publicPath: '/dist'*/
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            /*publicPath: 'img/'*/
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            /*outputPath: '/',*/
                            /*publicPath: 'img/'*/
                        }
                    }
                ],
                exclude: path.resolve(__dirname, 'src/index.html')
            }
        ]
    },
    plugins:[
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        /* Not a good approach as it will not allow to add html files
            dynamically and we need to remember names of all html files
            to add them
            1) Need to define entry in a different manner
            2) chunks: [] Tells webpack, which bundles should be injected in these pages*/
        /*new HtmlWebpackPlugin({
            filename: 'users.html',
            template: 'src/users.html',
            chunks: []
        }),*/
        new CleanWebpackPlugin(['dist'])
    ]
}