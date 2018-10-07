var path = require('path')
var webpack = require('webpack')

module.exports = {
    // entry: './src/main.js',//值可以是字符串、数组或对象
    // output: {
    //     path: path.resolve(__dirname, './dist'),//Webpack结果存储
    //     publicPath: '/dist/',//懵懂，懵逼，//然而“publicPath”项则被许多Webpack的插件用于在生产模式和开发模式下下更新内嵌到css、html，img文件里的url值
    //     filename: 'build.js'
    // },
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
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },

            {
                test: /\.json$/,
                loader: 'json-loader'
            },

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
            ,
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {//webpack-dev-server配置
        historyApiFallback: true,//不跳转
        noInfo: true,
        inline: true,//实时刷新
        hot:true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}





// const path = require('path')
// const webpack = require('webpack')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

// module.exports = {
//     //用来定位到报错地点
//     devtool: 'inline-source-map',
//     // devtool: 'source-map',

    
//     entry: './index.js',//值可以是字符串、数组或对象
//     output: {
//         path: path.resolve(__dirname, './dist'),//Webpack结果存储
//         publicPath: '/dist/',//懵懂，懵逼，//然而“publicPath”项则被许多Webpack的插件用于在生产模式和开发模式下下更新内嵌到css、html，img文件里的url值
//         filename: 'build.js'
//     },
//    module: {
//         rules: [
//             // {
//             //     test: /\.vue$/,
//             //     loader: 'vue-loader'
//             // },
//             // {
//             //     test: /\.js$/,
//             //     exclude: /node_modules/,
//             //     loader: "babel-loader"
//             // },
//             // {
//             //     test: /\.css$/,
//             //     use: [
//             //       { loader: "style-loader" },
//             //       { loader: "css-loader" }
//             //     ]
//             // }

//              {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//               },
//               // this will apply to both plain `.js` files
//               // AND `<script>` blocks in `.vue` files
//               {
//                 test: /\.js$/,
//                 loader: 'babel-loader'
//               },
//               // this will apply to both plain `.css` files
//               // AND `<style>` blocks in `.vue` files
//               {
//                 test: /\.css$/,
//                 use: [
//                   'vue-style-loader',
//                   'css-loader'
//                 ]
//               }

            
//             //,
//             // {
//             //     test: /\.scss$/,
//             //     use: [
//             //       'vue-style-loader',
//             //       'css-loader',
//             //       'sass-loader'
//             //     ]
//             // }
//             // {
//             //     test: /\.(scss|sass)$/,
//             //     loader: "style-loader!css-loader!sass-loader!sass!scss-loader!vue-style-loader"
//             // },
//             // {
//             //   test: /\.scss$/,
//             //   use: [{
//             //       loader: "style-loader" // 将 JS 字符串生成为 style 节点
//             //   }, {
//             //       loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
//             //   }, {
//             //       loader: "sass-loader" // 将 Sass 编译成 CSS
//             //   }]
//             // }
//         ]
//     },
//     resolve: {
//         alias: {
//             'vue$': 'vue/dist/vue.esm.js'
//         }
//     },
//     plugins: [
//         // make sure to include the plugin for the magic
//         //高版本的vue-loader必须的, for magic
//         new VueLoaderPlugin()
//     ]
// }
