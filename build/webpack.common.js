const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { resolve, getConditionalLoader, assetsPath } = require('./utils');
const dayjs = require('dayjs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require("workbox-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");

var { registerSw } = require("./service-worker-prod");
// var SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const swName = `/serviceWorker.js?t=${Number(new Date())}`;


module.exports = {
	entry: {
		index: './src/main.js',
	},
	output: {
		filename: 'js/[name].[fullhash:8].js',
		path: resolve('dist'),
		publicPath: '/',
		clean: true,
	},
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			'@': resolve('src')
		},
	},
	cache: {
		type: 'filesystem',
		allowCollectingMemory: true,
		buildDependencies: {
			config: [resolve('/config/dev.env.js'), resolve('/config/prod.env.js')],
		},
	},
	// externals: {
	// 	'vue': 'Vue',
	// },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: resolve('src'),
				use: ['babel-loader', getConditionalLoader()],
			},
			{
				test: /\.vue$/,
				use: ['vue-loader', getConditionalLoader()],
			},
			{
				test: /\.(png|gif|jpe?g|svg|webp)$/,
				type: 'asset', // webpack5使用内置静态资源模块，且不指定具体，根据以下规则使用
				generator: {
					filename: assetsPath('img/[name].[hash:7].[ext]'), // ext本身会附带点，放入img目录下
				},
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 超过10kb的进行复制，不超过则直接使用base64
					},
				},
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'file-loader',
				options: {
				  limit: 10000,
				  name: assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(ttf|woff2?|eot)$/,
				type: 'asset/resource', // 指定静态资源类复制
				generator: {
					filename: assetsPath('fonts/[name].[hash:7].[ext]'), // 放入font目录下
				},
			},
		],
	},
	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			id: `update-time_${dayjs().format("YYYY-MM-DD___hh:mm:ss")}`,
			template: resolve('index.html'),
			inject: 'body',
			minify: {
				removeComments: true, // 移除HTML中的注释
				collapseWhitespace: true, // 删除空符与换符
				minifyCSS: true, // 压缩内联css
			},
			serviceWorkerLoader: `<script>${registerSw(swName)}</script>`
		}),
		new InjectManifest({
			swSrc: path.resolve(__dirname, "../src/service-worker.js"),
			swDest: "serviceWorker.js",
			exclude: [/(app.js)/]
		}),
		// new GenerateSW({
		// 	clientsClaim: true,
		// 	skipWaiting: true,
		// 	runtimeCaching: [
		// 		{
		// 			urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
		// 			handler: "CacheFirst",
		// 			options: {
		// 				cacheName: "images",
		// 				expiration: {
		// 					maxEntries: 10,
		// 				},
		// 			},
		// 		},
		// 		{
		// 			urlPattern: new RegExp("https://888b.com/"),
		// 			handler: "NetworkFirst",
		// 			options: {
		// 				cacheName: "api",
		// 				networkTimeoutSeconds: 10,
		// 				expiration: {
		// 					maxEntries: 10,
		// 				},
		// 			},
		// 		},
		// 	],
		// }),
		new CopyPlugin({
			patterns: [{ from: path.resolve(__dirname, '../static'), to: 'static' }],
		}),
	],
	resolve: {
		symlinks: false,
		extensions: ['.vue', '.js', '.json'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			'@': resolve('src'),
		},
	},
};
