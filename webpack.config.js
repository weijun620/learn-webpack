const path = require('path');
const htmlWebpackPlugin=require("html-webpack-plugin");
module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist"),
        publicPath:"/"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer:{//配置开发服务器
        contentBase:"./dist",//告诉开发服务器在哪里查找文件,
        port:8848
    },
    plugins:[
        new htmlWebpackPlugin(),//自动创建html
    ]
}