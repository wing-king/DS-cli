const path = require('path');    //path 模块提供了一些工具函数，用于处理文件与目录的路径。
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ip = require('ip').address();
const port = 9000
const resolve = function (pathNmae) {
    return  path.resolve(__dirname, pathNmae)
}
module.exports = merge(common,{
    mode: "development",
    devtool: 'cheap-module-eval-source-map',   //生曾map 映射对应代码  方便错误查询
    devServer:{
        hot:true,    //hot模式开启
        port: port,
        contentBase: resolve('dist'),
        historyApiFallback: true,
        clientLogLevel: "none",
        host: '0.0.0.0',
        overlay:true,
        quiet: true,
        publicPath:"/"   
    },
    module:{            //处理项目中的不同类型的模块。
        rules:[      // rules 各种规则(数组类型) 每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)
            {
                test:/\.(sa|sc|c)ss$/i,
                use: [
                     'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                  ],  // style-loader 和css-loader 编译css处理
            }]
        },
    plugins:[
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['App running at:',`- Local: http://localhost:${port}`,`- Network: http://${ip}:${port}`],
            },
            onErrors:function (severity, errors) {
                console.log("severity",severity,errors);
                // You can listen to errors transformed and prioritized by the plugin
                // severity can be 'error' or 'warning'
              },
            clearConsole: true,
        }),
    ]
});