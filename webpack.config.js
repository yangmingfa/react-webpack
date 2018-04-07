const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtracTextWebpackPlugin = require('extract-text-webpack-plugin')
const publicPath = '/';
const buildPath = 'build';

module.exports = {
    entry: ['react-hot-loader/patch', 'babel-polyfill', path.resolve(__dirname, './src/index.js')],
    output: {
        path: path.resolve(__dirname, buildPath),
        filename: 'build.js',
        publicPath: publicPath
    },
    module: {
        loaders: [
            {
                test: /\.js$/,  // 配置要处理的文件格式，一般使用正则表达式匹配
                loader: 'babel-loader',  // 使用的加载器名称
                // query: {  // babel的配置参数，可以写在.babelrc文件里 也可以写在这
                //     presets: ['env', 'react']
                // }
            },
            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                require('autoprefixer'),
                                // require('precss'),
                                require('postcss-flexbugs-fixes')
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: [/\.gif$/,/\.jpe?g$/,/\.png$/],
                loader: 'url-laoder',
                options: {
                    limit: 10000, //1w字节以下大小的图片会自动转成base64
                }
            },
            // {
            //     test: /\.(js|jsx)$/,
            //     enforce: 'pre', // 加载器的执行顺序，不设置为正常执行，pre（前），post（后），eslint是检查代码规范，应该在编译前就执行
            //     loader: 'eslint-loader'
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 指定模板路径
            filename: 'index.html', // 指定文件名
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, buildPath),
        publicPath: publicPath, //添加
        port: '8081',
        inline: true,
        hot: true
    }
}