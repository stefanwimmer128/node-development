/**
 * Created on 30.01.17 at 15:18
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */

const path = require("path");

module.exports = {
    entry: "./src/development",
    externals: [
        "lodash",
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: [
                        "es2015",
                        "flow",
                    ],
                    plugins: [
                        "add-module-exports",
                        "syntax-trailing-function-commas",
                        "typecheck",
                    ],
                },
            },
        ],
    },
    output: {
        path: path.join(__dirname, "dist"),
        
        filename: "development.js",
        
        library: "development",
        libraryTarget: "umd2",
    },
    target: "node",
};
