const webpackMerge = require( 'webpack-merge' );
const commonConfig = require( './webpack.common.js' );
// css分离打包
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
// 压缩css,只能压缩css
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new MiniCssExtractPlugin( {
            filename: '[name].css',
        } ),
    ],
    module: {
        rules: [ {
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true
                    }
                },
                'postcss-loader'
            ]
        } ],
    },
    optimization: {
        minimizer: [ new OptimizeCSSAssetsPlugin( {} ) ]
    },
    output: {
        // contenthash解决浏览器缓存问题，内容变化，文件名才会变化
        filename: '[name].[contenthash].js'
    },
}
module.exports = webpackMerge( prodConfig, commonConfig );