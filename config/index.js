// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');
const devEnv = require('./dev.env');
const prodEnv = require('./prod.env');

module.exports = {
	dev: {
		env: {
			NODE_ENV: devEnv.NODE_ENV,
			APP_TITLE: '"2q-sport-admin"',
			// # 是否开启 CDN 支持，
			APP_CDN: '"OFF"',
			testUrl: devEnv.testUrl,
		},

		// Paths
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		// Source Maps https://webpack.js.org/configuration/devtool/#development
		// eval-cheap-module-source-map is faster for development
		devtool: 'eval-cheap-module-source-map',

		// Various Dev Server settings
		host: 'localhost', // can be overwritten by process.env.HOST
		port: 9528, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
		autoOpenBrowser: true,
		proxyTable: {
			'/apis': {
				//将www.exaple.com印射为/apis
                // target: 'https://km938b.com/member/', //
                target: 'https://vn38b.com/member/', //
                // target: 'https://test-admin.xkiosx.xyz/admin/', //
                //  target: 'http://192.168.1.13:8805',  // 后端adai
                //  target: 'http://192.168.1.84:8801',  // 后端qiwen
                //  target: 'http://192.168.1.10:8801',  // 后端jazz
                //  target: 'http://192.168.1.147:8801',  // 后端darry A
                // target: 'http://192.168.1.49:8808',       // lucas
                // target: 'http://dogfoodadmin.888b.com/admin',  // 测试电脑
                // target: "https://release.888b.com/member/",
                // target: "https://liuyue.bet88vin.com/member/", // 后端adai
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    "^/apis": "" //需要rewrite的,
                },
				headers: {
					Connection: 'keep-alive',
				},
			},
		},
		errorOverlay: true,
		notifyOnErrors: true,
		poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

		// Use Eslint Loader?
		// If true, your code will be linted during bundling and
		// linting errors and warnings will be shown in the console.
		useEslint: true,
		// If true, eslint errors and warnings will also be shown in the error overlay
		// in the browser.
		showEslintErrorsInOverlay: false,

		// If you have problems debugging vue-files in devtools,
		// set this to false - it *may* help
		// https://vue-loader.vuejs.org/en/options.html#cachebusting
		cacheBusting: true,
		cssSourceMap: true
	},

	build: {
		env: {
			NODE_ENV: prodEnv.NODE_ENV,
			APP_TITLE: '"888b"',
			// 是否开启CDN加速
			APP_CDN: '"OFF"',
			// # 是否开启 gzip 压缩，
			APP_GZIP: '"ON"',
			testUrl: prodEnv.testUrl,
		},

		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),

		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',

		/**
		 * Source Maps
		 */

		productionSourceMap: false,
		// https://webpack.js.org/configuration/devtool/#production
		devtool: '#source-map',

		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: true,
		productionGzipExtensions: ['js', 'css'],
		// Run the build command with an extra argument to
		// View the bundle analyzer report after build finishes:
		// `npm run build --report`
		// Set to `true` or `false` to always turn it on or off
		bundleAnalyzerReport: process.env.npm_config_report,
	},
};
