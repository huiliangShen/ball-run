const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.vue'],
        alias: {
            '@': path.resolve(__dirname, '..', 'src/'),
            '@page': path.resolve(__dirname, '..', 'src/app/page/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[fullhash].[ext]',
                        outputPath: 'imgs',
                        limit: 8192,
                        esModule: false
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]',
                        outputPath: 'fonts'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '..', 'src'),
                use: ["babel-loader"]
            },
           /* {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1}
                    },
                    'postcss-loader'
                ]
            }, */
            {
                test: /\.(less|css)$/i,
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                          /*  modules: {
                                exportLocalsConvention: "camelCase",
                                localIdentName: '[path][name]__[local]--[fullhash:base64:5]'
                            } */
                        },
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        // need update
        new HtmlWebpackPlugin({
            // auto insert entry url to index.html
            template: path.resolve(__dirname, '../public/index.ejs'),
            filename: "index.html"
        }),
        new VueLoaderPlugin(),
        new ESLintPlugin({
            exclude: ['node_modules'],
            extensions: ['js', 'vue'],
           // files: [path.resolve(__dirname, '../src')],
            emitError: true
        })
    ]
}
console.log(process.env.NODE_ENV)
