var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './index.js',//值可以是字符串、数组或对象
    output: {
        path: path.resolve(__dirname, './dist'),//Webpack结果存储
        publicPath: '/dist/',//懵懂，懵逼，//然而“publicPath”项则被许多Webpack的插件用于在生产模式和开发模式下下更新内嵌到css、html，img文件里的url值
        filename: 'build.js'
    },
   module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
            //自己加的
            ,
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
            ,
            {
                test: /\.(scss|sass)$/,
                loader: "style-loader!css-loader!sass-loader!sass!scss-loader!vue-style-loader"
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}
