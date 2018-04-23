const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: ["./src/index"],
    cache: false,
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {presets: ["env", "react"]}
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            }
        ]
    },
    externals: {
        // jquery: "jQuery"
    },
    resolve: {
        alias: {
            coms: path.resolve(__dirname, "src/components/")
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
                BASENAME: JSON.stringify(""),
                TITLE_PAGE: JSON.stringify("Hello5")
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new webpack.NoEmitOnErrorsPlugin()
        // new webpack.optimize.AggressiveMergingPlugin() //Merge chunks
    ]
};
