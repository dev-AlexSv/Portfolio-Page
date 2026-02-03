const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        hot: true,
        open: true,
        compress: true,
        port: 8080,
        watchFiles: ["./src/main.html"],
    },
});
