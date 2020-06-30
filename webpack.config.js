// // long version - not working correctly - css files in not working
// const path = require("path");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const entryPath = "development";
// const autoprefixer = require('autoprefixer');
// const Html = require('html-webpack-plugin');
// const Compression = require("compression-webpack-plugin");
//
// module.exports = {
//     entry: ["whatwg-fetch",`./${entryPath}/js/app.js`],
//     output: {
//         filename: "out.js",
//         path: path.resolve(__dirname, `${entryPath}/build`)
//     },
//     devServer: {
//         contentBase: path.join(__dirname, `${entryPath}`),
//         publicPath: "/build/",
//         compress: true,
//         port: 3001,
//         historyApiFallback: true
//     },
//     watch: true,
//     mode: 'development',
//     devtool: "source-map",
//     // plugins: [
//     //     new MiniCssExtractPlugin()
//     // ],
//     plugins: [
//         new Html({
//             filename: "index.html",
//             template: `./${entryPath}/index.html`
//         }),
//         new MiniCssExtractPlugin({
//             filename: "main.css",
//         }),
//         new Compression({
//             threshold: 0,
//             minRatio: 0.5
//         })
//     ],
//     module: {
//         rules: [
//             // {
//             //     test: /\.m?js$/,
//             //     exclude: /node_modules/,
//             //     use: {
//             //         loader: 'babel-loader',
//             //         options: {
//             //             presets: ['@babel/preset-env']
//             //         }
//             //     }
//             // },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 loader: "babel-loader"
//             },
//             {
//                 test: /\.(png|jpe?g|gif|svg)$/i,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                     }
//                 ]
//             },
//             ////alternative for file loader:
//             // {
//             //     test: /\.(jpe?g|gif|png|svg)$/,
//             //     loader: "file-loader",
//             //     options: {
//             //         name: "[name].[ext]",
//             //         publicPath: "./development/images/",
//             //         outputPath: "./distribution/images/"
//             //     }
//             // },
//             {
//                 test: /\.s[ac]ss$/i,
//                 exclude: /node_modules/,
//                 use: [
//                     {
//                         loader: MiniCssExtractPlugin.loader,
//                         options: {
//                             hmr: true,
//                             sourceMap: true,
//                         },
//                     },
//                     'css-loader',
//                     {
//                         loader: 'postcss-loader',
//                         options: {
//                             plugins: () => [autoprefixer()],
//                             sourceMap: true,
//                         }
//                     },
//                     'sass-loader'
//                 ],
//             },
//         ]
//     }
// };


// short version - working
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');
const Compression = require("compression-webpack-plugin");

module.exports = {
    entry: ["whatwg-fetch", `./development/js/app.js`],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `development/build`),
        publicPath: "/"
    },
    devServer: {
        contentBase: path.join(__dirname, `development`),
        publicPath: "/build/",
        compress: true,
        port: 3001,
        historyApiFallback: true
    },
    watch: true,
    mode: 'development',
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
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'sass-loader'
            //     ],
            // },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    // //Uncomment for production \/
                    // MiniCssExtractPlugin.loader,
                    //Comment for production \/
                    'style-loader',
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


            // {
            //     test: /\.(woff|woff2|eot|ttf|svg)$/,
            //     include: /(node_modules\/@fonticonpicker\/react-fonticonpicker\/build)/,
            //     loader: 'file-loader',
            //     options: {
            //         limit: 1024,
            //         name: '[name].[ext]',
            //         publicPath: '/assets/fonts',
            //         outputPath: '/assets/fonts'
            //     }
            // },

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

