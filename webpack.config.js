const path = require("path");

module.exports = [{
    entry: {
        index: ['whatwg-fetch','./development/js/index.js'],
    },
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "./distribution/js")
    },
    watch: false,
    mode: 'production',
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
},
    {
        entry: {
            app: ['whatwg-fetch','./development/js/app.js']
        },
        output: {
            filename: "bundle2.min.js",
            path: path.resolve(__dirname, "./distribution/js")
        },
        watch: false,
        mode: 'production',
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }]