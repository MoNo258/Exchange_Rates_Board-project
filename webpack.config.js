const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');
const Compression = require("compression-webpack-plugin");

module.exports = {
    entry: ["whatwg-fetch", `./development/js/app.js`],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `build`),
        // publicPath: "/"
    },
    devServer: {
        contentBase: path.join(__dirname, `development`),
        publicPath: "/build/",
        compress: true,
        // port: process.env.PORT || 3001,
        port: process.env.PORT,
        historyApiFallback: true,
        disableHostCheck: true, // for package.json part with webpack dev: "start": "webpack-dev-server --port $PORT --host 0.0.0.0"
        host: '0.0.0.0' // for package.json part with webpack dev: "start": "webpack-dev-server --port $PORT --host 0.0.0.0"
    },
    // watch: true, // for DEV
    watch: false, //for PROD
    // mode: 'development',
    // mode: 'production',
    devtool: "source-map",
    plugins: [
        new Html({
            filename: "index.html",
            template: `./development/index.html`
        }),
        new MiniCssExtractPlugin({
            filename: "main.css",
        }),
        new Compression({
            threshold: 0,
            minRatio: 0.5
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    //Uncomment for production \/
                    MiniCssExtractPlugin.loader,

                    // //Comment for production \/
                    // 'style-loader',

                    // //end of code to comment/uncomment
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: "/assets/images/",
                    outputPath: "/assets/images/"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]',
                    publicPath: '/assets/fonts/',
                    outputPath: '/assets/fonts/'
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ]
    }
};

