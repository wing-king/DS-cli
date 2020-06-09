const path = require('path');    //path 模块提供了一些工具函数，用于处理文件与目录的路径。
const HtmlWebpackPlugin = require('html-webpack-plugin');   //构建html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 清理构建目录下的文件
const webpack = require('webpack');       //webpack打包工具
const VueLoaderPlugin = require('vue-loader/lib/plugin');         // vue-loader 编译vue文件
const CopyPlugin = require("copy-webpack-plugin");
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'); // 不同系统大小写问题
const resolve = function (pathNmae) {
    return  path.resolve(__dirname, pathNmae)
}
module.exports = {
    mode: "development",
    entry: {       //入口
        app: [ resolve('../src/main.js')]
    },
    module:{            //处理项目中的不同类型的模块。
        rules:[      // rules 各种规则(数组类型) 每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)
            {
                test: /\.js$/,
                use: [{
                    loader: "thread-loader",
                    // loaders with equal options will share worker pools
                    options: {
                      workers: 2,
                      workerParallelJobs: 50,
                      workerNodeArgs: ['--max-old-space-size=1024'],
                      poolRespawn: false,
                      poolTimeout: 2000,
                      poolParallelJobs: 50,
                      name: "pool"
                    }
                  },
                    {loader:'babel-loader',
                        options: {
                            "plugins": [
                              [
                                "@babel/plugin-transform-runtime",
                                {
                                  "corejs": 2,
                                  "helpers": true,
                                  "regenerator": true,
                                  "useESModules": false
                                }
                              ]
                            ]
                          }
                    },
                    {
                    loader:'eslint-loader',
                     //eslint检查报告的格式规范
                    options: {
                        formatter: require("eslint-friendly-formatter")
                    }  
                }],
                enforce: "pre", // 编译前检查
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')], // 指定检查的目录
                
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',         //vue-loader 编译vue模块
            },
            //使用url-loader(file-loader的一个再封装)对引入的图片进行编码,此处可将小于8192字节(8kb)的图片转为DataURL(base64),
            //大于limit字节的会调用file-loader进行处理！
            //图片一般发布后都是长缓存,故此处文件名加入hash做版本区分!
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|svg|ttf|eot)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    encoding:true,
                    name: "static/img/[name].[hash:16]"
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackPlugin({            // 构建html
            filename:'index.html',      //文件名
            template:resolve('../public/index.html'),       //参照模板样式
            favicon: resolve('../public/favicon.ico'),
            minify: {
                minimize: true,
                removeConments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
            }
        }),
        new CopyPlugin({
            patterns: [
                { from:resolve('../public/favicon.ico') , to: './' },
                { from:resolve('../public/static/') , to: './static' },
              ],
        }),
       
        new webpack.DefinePlugin({
            __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
            __PROJECT_ENV__: JSON.stringify(process.env.PROJECT_ENV),
        }),
        
        new VueLoaderPlugin(),                 //vue-loader插件开启
        new webpack.ProgressPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    output: {        //出口
        filename: 'static/js/[name].[hash:16].js',    //文件名
        path: path.resolve(__dirname, '../dist/'),   //路径
        publicPath:"/"        //srcript 引入路径
    },
    resolve:{
        //引入路径是不用写对应的后缀名
        extensions: ['.js', '.vue', '.json'],
        alias:{
            //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
            'vue$':'vue/dist/vue.esm.js',
            //用@直接指引到src目录下
            '@': path.resolve(__dirname,'../src/'),
            '@config': path.resolve(__dirname,'../config/'),
            '@tools': path.resolve(__dirname,'../src/utils/tool/'),
            '@components': path.resolve(__dirname,'../src/components/index.js'),
            '@global': path.resolve(__dirname,'../src/global/'),
            '@static': path.resolve(__dirname,'../public/static/')
        }
    }
};
