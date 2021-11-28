module.exports = {
	configureWebpack: {
		devServer: {
			watchOptions: {
				ignored: [
					/node_modules/,
					/git/,
				],
			},
		},
	},
	publicPath: (
		process.env.NODE_ENV === "production" ? (
			"/abdl-bedwetting-chart/"
		) : (
			"/"
		)
	),
	pwa: {
		name: "ABDL Bedwetting Chart",
		themeColor: "#071022",
		msTileColor: "#071022",
		manifestOptions: {
			short_name: "BW Chart",
		},
	},
};
