const Webpack = require( 'webpack' );
const webpackMerge = require( 'webpack-merge' );
const commonConfig = require( './webpack.common.js' );

// const ENV = process.env.NODE_ENV;
// const isDev = ENV === 'production' ? false : true;

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 9000,
        open: false,
        overlay: true,
        contentBase: './dist/',
        compress: true,
        historyApiFallback: true,
        proxy: {
            '**': {
                target: 'https://cnodejs.org/api/v1',
                changeOrigin: true
            },
            // '**': {
            //     target: 'http://sx.api.mengtuiapp.com',
            //     changeOrigin: true
            // },
        },
        hot: true,
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [ {
            test: /\.less$/,
            use: [
                'style-loader',
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
        } ]
    },
    output: {
        filename: '[name].js',
    },
};

module.exports = webpackMerge( devConfig, commonConfig );