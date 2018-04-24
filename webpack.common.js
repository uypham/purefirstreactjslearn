const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const PATH = {
    BUILD: path.resolve(__dirname, "public"),
    APP: path.resolve(__dirname, "src")
};

module.exports = {
    entry: {
        app: `${PATH.APP}/index.jsx`
    },
    module: {
        // noParse: /jquery|jquery-migrate|lodash/,
        rules: [
            {
                include: PATH.APP,
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["env", "react", "stage-2"]
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ["css-hot-loader"].concat(ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{loader: "css-loader", options: {importLoaders: 1}},
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: "postcss",
                                plugins: loader => [
                                    require("autoprefixer")({browsers: ["last 3 version"]})
                                ]
                            }
                        }, "sass-loader"]
                }))
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    limit: 10000,
                    name(file) {
                        return process.env.NODE_ENV === "development" ? "[name].[ext]" : "[hash].[ext]";
                    },
                    outputPath: "assets/"
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["public/assets", "public/*.js", "public/*.css"]),
        new CopyWebpackPlugin([{from: process.env.NODE_ENV === "development" ? "src/assets/html/index.html" : "src/assets/html/index.pro.html", to: "index.html"}], {copyUnmodified: true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin({
            disable: process.env.NODE_ENV === "development",
            filename: "styles.css"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".scss"],
        alias: {
            Coms: path.resolve(__dirname, "src/components")
        }
    },
    output: {
        filename: "[name].bundle.js",
        path: PATH.BUILD
    }
};
