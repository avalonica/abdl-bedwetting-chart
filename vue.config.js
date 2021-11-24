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
};
