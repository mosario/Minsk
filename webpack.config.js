var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var url = require('url-loader');

module.exports = {
    entry: [
        path.join(__dirname, './js/app.js')
    ], 
    output: {
        path: path.join(__dirname, 'build/'),
        filename:'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    devtool: 'eval',
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'react-hot',
                    'babel?stage=0'
                ]
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.jpg$/, loader: "file-loader" },
            //{ test: /\.css$/, loader: ExtractTextPlugin.extract("postcss-loader", "style-loader!css-loader!postcss-loader") },
            {
			    test:   /\.(png|gif|jpe?g|svg|jpg)$/i,
			    loader: 'url!img-loader!url-loader!file-loader',
			    query: {
			      limit: 10000,
			    }
			},
			{
			  test: /\.(png|jpg|gif)$/,
			  loader: "file-loader?name=img/img-[hash:6].[ext]"
			},
            { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" }
        ]
    },

    postcss: function () {
        return [require('autoprefixer'), require('precss'), require('postcss-mixins'), require('postcss-assets')];
    }
};