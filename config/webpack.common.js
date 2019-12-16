const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const AddAssetHtmlPlugin = require( 'add-asset-html-webpack-plugin' );

module.exports = {
    entry: {
        home: './src/index.tsx',
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx', ],
        mainFiles: [ 'index' ],
        // alias: {
        //     common: path.resolve(__dirname, 'src/a/b/common/'),
        // }
    },
    module: {
        rules: [ {
            test: /\.(t|j)sx?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                {
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                        cache: true
                    },
                }
            ],
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    limit: 10240
                }
            }
        },
        {
            test: /\.(eot|svg|ttf|woff)$/,
            use: {
                loader: 'file-loader',
            }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: 'src/index.html'
        } ),
        new CleanWebpackPlugin(),


        new AddAssetHtmlPlugin( {
            filepath: require.resolve( '../dll/vendors.dll.js' )
        } ),
        new webpack.DllReferencePlugin( {
            manifest: path.resolve( __dirname, '../dll/vendors.manifest.json' )
        } )
    ],
    optimization: {
        usedExports: true,
        splitChunks: {
            // 默认async 异步加载性能好
            chunks: 'all',
            // minSize: 30000,
            // maxSize: 0,
            // // minChunks：1使用1次就进行代码分割
            // minChunks: 1,
            // maxAsyncRequests: 5,
            // maxInitialRequests: 3,
            // automaticNameDelimiter: '~',
            // name: true,
            // cacheGroups: {
            //   vendors: {
            //     test: /[\\/]node_modules[\\/]/,
            //     // priority 越大优先级越高
            //     priority: -10,
            //     // filename: 'vendors.js'
            //   },
            //   default: {
            //     // filename: 'common.js',
            //     priority: -20,
            //     reuseExistingChunk: true
            //   }
            // }
        }
    },
    output: {
        path: path.resolve( __dirname, '../dist' )
    }
};