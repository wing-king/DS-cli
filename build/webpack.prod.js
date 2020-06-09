const path = require('path');    //path 模块提供了一些工具函数，用于处理文件与目录的路径。
const webpack = require('webpack');       //webpack打包工具
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PreloadPlugin = require('preload-webpack-plugin'); //预加载方案 缓存
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common,{
    mode: "production",
    devtool: false,   //生曾map 映射对应代码  方便错误查询
    module:{            //处理项目中的不同类型的模块。
        rules:[      // rules 各种规则(数组类型) 每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)
            {
                test:/\.(sa|sc|c)ss$/i,
                use: [
                     {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                  ],  
            }]
        },
    plugins:[
         new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'static/css/[name].[chunkhash:16].css',
            chunkFilename:  'static/css/[id].[chunkhash:16].css',
          }),
        new PreloadPlugin(
            {
            rel: 'prefetch',
            include: 'asyncChunks'
            }
        ),
        new FriendlyErrorsWebpackPlugin()
    ],
    
    optimization: {
        runtimeChunk: {
            name: entrypoint => `index`
          },
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions:{
                compress: {
                    warnings: false,
                    drop_debugger: true, 
                    drop_console: true,
                    arrows: false,
                    collapse_vars: false,
                    comparisons: false,
                    computed_props: false,
                    hoist_funs: false,
                    hoist_props: false,
                    hoist_vars: false,
                    inline: false,
                    loops: false,
                    negate_iife: false,
                    properties: false,
                    reduce_funcs: false,
                    reduce_vars: false,
                    switches: false,
                    toplevel: false,
                    typeofs: false,
                    booleans: true,
                    if_return: true,
                    sequences: true,
                    unused: true,
                    conditionals: true,
                    dead_code: true,
                    evaluate: true 
                  },
            },
            cache: true,
            parallel: true,
            sourceMap: false // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks:{//可以在这里直接设置抽离代码的参数，最后将符合条件的代码打包至一个公共文件
            chunks:'all',
            cacheGroups: {
                styles: { // css
                  name: 'styles',
                  test: /\.css$/,
                  chunks: 'all',
                  enforce: true
                },
                common:{// js
                    name:'common',
                    chunks:'all',
                    minSize:1,
                    minChunks:2,
                    priority:-20//设置匹配优先级，数字越小，优先级越低
                },
                vendor:{
                    name:'vendors',
                    test:/[\\/]node_modules[\\/]/,//匹配node模块中匹配的的模块
                    priority:-10,//设置匹配优先级，数字越大，优先级越高
                    chunks:'all'
                }
              }
        },
    } ,
    stats: {
        // 显示警告/错误的依赖和来源（从 webpack 2.5.0 开始）
        moduleTrace: true,
        // 添加 children 信息
        children: false,
        // 添加错误的详细信息（就像解析日志一样）
        errorDetails: true,
        // 添加资源信息
        assets: true
        
    },
    performance: {
        hints:'warning',
        maxEntrypointSize: 500000, //入口文件最大bytes（500k）
        maxAssetSize: 500000 //任何单文件最大bytes（500k）
    },
    output: {        //出口
        filename: 'static/js/[name].[chunkhash:16].js',    //文件名
    },
});