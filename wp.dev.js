var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: ["./src/index"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["env", "react"]
                }
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
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        inline: true,
        historyApiFallback: true /* Ko có dòng này F5 là khỏi router lun */,
        host: "0.0.0.0",
        public: "localhost:3000",
        port: 3000,
        open: true
    },
    externals: {
        //jquery: "jQuery"
    },
    // resolve: {
    //     alias: {
    //         masonry: "masonry-layout",
    //         isotope: "isotope-layout"
    //     }
    // },
    resolve: {
        alias: {
            coms: path.resolve(__dirname, "src/components/"),
        }
        ,
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
                BASENAME: JSON.stringify(""),
                TITLE_PAGE: JSON.stringify("Hello5")
            }
        })
    ]
};
