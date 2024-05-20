const path = require('path');
const config = require('../config/index.js')

module.exports = {
	resolve: function (dir) {
		return path.join(__dirname, '..', dir);
	},
	assetsPath: function (_path) {
		const assetsSubDirectory = process.env.NODE_ENV === 'production'
		  ? config.build.assetsSubDirectory
		  : config.dev.assetsSubDirectory
	  
		return path.posix.join(assetsSubDirectory, _path)
	},
	readEnv: (file) => {
		let { parsed } = require('dotenv').config({ path: file });
		Object.keys(parsed).forEach((key) => (parsed[key] = JSON.stringify(parsed[key])));
		return parsed;
	},
	getConditionalLoader: () => ({
		loader: 'js-conditional-compile-loader',
		options: {
			isDebug: process.env.NODE_ENV === 'development', // optional, this expression is default
			offCDN: process.env.APP_CDN === 'OFF', // any prop name you want, used for /* IFTRUE_CDN ...js code... FITRUE_CDN */
		},
	}),
};
