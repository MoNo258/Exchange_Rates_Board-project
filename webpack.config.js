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



// short version - smth is working
const path = require("path");
const entryPath = "development";

module.exports = {
    entry: ["whatwg-fetch",`./${entryPath}/js/app.js`],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`)
    },
    devServer: {
        contentBase: path.join(__dirname, `${entryPath}`),
        publicPath: "/build/",
        compress: true,
        port: 3001,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },{
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    }
};

