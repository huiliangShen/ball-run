module.exports = {
	plugins: [
		require("autoprefixer"),
		/* require("postcss-pxtorem")({
			"exclude": /(node_module|other)/,
			"rootValue": 75
		}), */
		require("postcss-plugin-px2rem")({
			"exclude": /(node_module|other)/,
			"rootValue": 75,
			"selectorBlackList": ['.no'],
			"ignoreIdentifier": "PX"
		})
	]
}
