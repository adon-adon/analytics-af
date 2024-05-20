const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { getConditionalLoader, assetsPath } = require("./utils");
const config = require("../config/index.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WebpackBar = require("webpackbar");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { DefinePlugin } = require("webpack");
const webpackCommonConfig = require("./webpack.common.js");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

module.exports = merge(webpackCommonConfig, {
	mode: "production",
	devtool: false,
	output: {
		path: config.build.assetsRoot,
		publicPath: config.build.assetsPublicPath,
		filename: assetsPath("js/[name].[chunkhash].js"),
		chunkFilename: assetsPath("js/[id].[chunkhash].js"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
					},
					{
						loader: "px2rem-loader",
						options: {
							remUnit: 37.5,
						},
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: false,
						},
					},
					{
						loader: "postcss-loader",
					},
					{
						loader: "px2rem-loader",
						options: {
							remUnit: 37.5,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: false,
							implementation: require("node-sass"),
						},
					},
					{
						loader: "sass-resources-loader",
						options: {
							resources: [path.join(__dirname, "../src/style/main.scss")],
						},
					},
					getConditionalLoader(),
				],
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: false,
						},
					},
					{
						loader: "less-loader",
						options: {
							sourceMap: false,
						},
					},
					getConditionalLoader(),
				],
			},
		],
	},
	plugins: [
		new DefinePlugin({
			BASE_URL: JSON.stringify("/"),
			"process.env": config.build.env,
		}),
		new MiniCssExtractPlugin({
			filename: assetsPath("css/[name]_[contenthash:8].css"),
			ignoreOrder: true,
		}),
		// 进度条
		new WebpackBar({
			reporters: ["fancy", "profile"],
			profile: true,
		}),
		// new CopyPlugin({
		// 	patterns: [{ from: path.resolve(__dirname, '../static'), to: 'static' }],
		// }),
		// new CompressionPlugin({
		// 	filename: '[path][base].gz',
		// 	threshold: 10240,
		// 	minRatio: 0.8,
		// }),
		// new webpack.DllReferencePlugin({
		// 	// 指定dll使用说明书 路径
		// 	manifest: path.resolve(__dirname, "../static/dll/manifest.json")
		// }),
		// // 在打包后的html中 插入资源，这个插件一定要配置在 HtmlPlugin插件之后
		// new AddAssetHtmlWebpackPlugin({
		// 	// 加载dll 资源
		// 	filepath: path.resolve(__dirname, "../static/dll/vue_dll.js"),
		// 	// 必须加这个字段 否则打包后dll引用路径前会莫名加auto
		// 	publicPath: './',
		// })
	],
	optimization: {
		moduleIds: "deterministic",
		runtimeChunk: true,
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						"default",
						{
							discardComments: { removeAll: true },
						},
					],
				},
			}),
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
		splitChunks: {
			// minSize: 20000,
			// // 当模块大小大于50KB强行进行拆分忽略其他任何限制
			// enforceSizeThreshold: 50000,
			cacheGroups: {
				// default: {
				// 	minChunks: 2,
				// 	priority: -20,
				// 	reuseExistingChunk: true,
				// },
				// Disabling this cache group.
				default: false,
				// defaultVendors: {
				// 	test: /[\\/]node_modules[\\/]/,
				// 	priority: -10,
				// 	reuseExistingChunk: true,
				// },
				defaultVendors: {
					chunks: "all",
					// We could have also set this property as: `splitChunks.minSize: 0`,
					// since this property is inherited(by default) by the cache groups.
					minSize: 10,
					// Enforcing the minimum number of chunks that request a module.
					minChunks: 3,
					// Q: What kind of modules should new chunks contain?
					// A: Modules that come from `node_modules`
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					reuseExistingChunk: true,
				},
				// vendor: {
				// 	test: /node_modules/,
				// 	chunks: 'all',
				// 	priority: 10, // 优先级
				// 	enforce: true,
				// 	minChunks: 3,
				// 	name: 'vendor',
				// },
				// main: {
				// 	test: /src/,
				// 	name: 'main',
				// 	enforce: true,
				// },
			},
		},
	},
});
