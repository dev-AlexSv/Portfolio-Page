const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { text } = require("stream/consumers");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/js/index.js"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "DevAlex",
            template: "./src/main.html",
        }),
    ],
    output: {
        filename: "[name][contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
};
