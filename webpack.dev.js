const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const webpack = require("webpack");

process.env.NODE_ENV = "development";

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        })
    ]
});
