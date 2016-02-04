var webpack = require("webpack");

module.exports = {
    entry: "./Source/js/main/main.js",

    output: {
        publicPath: "./Publish/js/",
        filename: "./Publish/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};