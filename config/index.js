const path = require('path')

module.exports = {
	devServer: {
		port: 9001,
		compress: true,
		proxy: {
			"/api": {
				target: "http://10.10.20.240:11000/api",
				changeOrigin: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		},
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	},
	output: {
		filename: "js/[name].[chunkhash:7].js",
		path: path.resolve(__dirname, "../build")
		/* library: 'xxx', // 打包名称，这个如果子应用定义好，要告知主应用，因为这个和主应用注册子应用的名称一致
		libraryTarget: "umd",
		jsonpFunction: `webpackJsonp_baas`,
		publicPath: "/child/dagApp/" */
	}
}
