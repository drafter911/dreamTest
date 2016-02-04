var webpack = require("webpack");

module.exports = {
    entry: "./Source/js/main/main.js",
    //resolve: {
    //    modulesDirectories: [
    //        "./Source/js/modules/"
    //    ]
    //},
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