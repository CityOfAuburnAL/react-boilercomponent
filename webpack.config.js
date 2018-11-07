/*** webpack.config.js ***/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const combineLoaders = require("webpack-combine-loaders");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "demo/src/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "demo/src/index.js"),
    output: {
        path: path.join(__dirname, "demo/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader','eslint-loader']
            },
            {
                test: /\.css$/,
                loader: combineLoaders([
                    {
                      loader: 'style-loader'
                    }, {
                      loader: 'css-loader',
                      query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                      }
                    }
                  ])
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    devServer: {
        port: 3001
    }
};