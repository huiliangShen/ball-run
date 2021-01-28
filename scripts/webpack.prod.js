const { merge } = require("webpack-merge")
const common = require("./webpack.common")
// const webpack = require('webpack')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require('copy-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const { output } = require("../config")
const path = require('path')

module.exports = merge(common, {
	mode: "production",
	// devtool: "none",
	output: {
		...output
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "../public/"),
					to: path.resolve(__dirname, "../build")
				}
			]
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash].css",
			chunkFilename: "css/[id].[contenthash].css"
		}),
		// new CompressionPlugin()
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserWebpackPlugin({
				parallel: true,
				terserOptions: {
					warnings: false,
					compress: {
						drop_debugger: true,
						drop_console: true
					}
				}
			}),
			new CssMinimizerPlugin()
		],
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				// 打包第三方库的文件
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					priority: 1,
					minChunks: 1
				},
				// 打包公用代码
				common: {
					name: "common",
					minSize: 3 * 1024,
					priority: 0,
					minChunks: 2
				}
			}
		},
		runtimeChunk: { name: "manifest" }
	}
})
