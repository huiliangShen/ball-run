const { merge } = require("webpack-merge")
const common = require("./webpack.common")
// need pr
// const ErrorOverlayPlugin = require("error-overlay-webpack-plugin")
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")
const webpack = require("webpack")
const { devServer } = require("../config")
const path = require('path')

module.exports = merge(common, {
	mode: "development",
	devtool: "cheap-module-source-map",
	// 监测到变化会强制刷新页面
	output: {
		filename: 'js/[name].[fullhash].js',
		path: path.resolve(__dirname, 'build')
	},
	devServer: {
		contentBase: path.resolve(__dirname, "../public"),
		port: 9001,
		hot: true,
		// 可在局域网内使用
		host: "0.0.0.0",
		...devServer
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin(),
       // new ErrorOverlayPlugin()
    ]
})
