const path = require("path")
module.exports = {
    //入口：有并且可以有多个
    entry:{
        main:["./src/main.js"]
    },
    // 打包环境：开发 & 生产
    mode:"development",
    // 出口：有且只能有一个
    output:{
        filename:"[name]-bundle.js",
        path: path.resolve(__dirname,"../dist"),
        publicPath:"/"
    },
    //本地服务器
    devServer:{
        contentBase:"dist",
        overlay:true
    },
    module:{
        rules:[
            //js loaders
            {
              test:/\.js$/,
              use:[
                {
                  loader:"babel-loader"
                }
              ],
              exclude:/node_modules/
            },
            //css loaders
            {
                test: /\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
            //html loaders
            {
                test: /\.html$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"[name].html"
                        }
                    },
                    {
                        loader:"extract-loader"
                    },
                    {
                        loader:"html-loader",
                        options:{
                            attrs:["img:src"]
                        }
                    }
                ]
            },
          //image loaders
          {
            test: /\.(jpg|git|png)$/,
            use:[
                {
                    loader:"file-loader",
                    options:{
                        name:"images/[name].[ext]"
                    }
                }
            ]
        }
        ]
    }
}
