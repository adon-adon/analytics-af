const path = require('path');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const webpackCommonConfig = require('./webpack.common.js');
const config = require("../config/index.js");

module.exports = merge(webpackCommonConfig, {
	mode: 'development',
	devtool: config.dev.devtool,
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: config.dev.port,
		hot: true,
		compress: true,
		historyApiFallback: true,
		proxy: config.dev.proxyTable,
		client: {
			logging: 'warn',
			overlay: {
				errors: true,
				warnings: false,
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'px2rem-loader',
						options: {
						  remUnit: 37.5
						}
					}
				],
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'px2rem-loader',
						options: {
						  remUnit: 37.5
						}
					},
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require("node-sass"),
						},
					},
					{
						loader: 'sass-resources-loader',
						options: {
							resources: [
								path.join(__dirname, '../src/style/main.scss')
							],
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
		],
	},
	plugins: [
		new DefinePlugin({
			BASE_URL: JSON.stringify('/'),
			'process.env': config.dev.env,
		}),
		new HotModuleReplacementPlugin(),
	],
});
