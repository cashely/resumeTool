const webpack =require('webpack');
module.exports = {
    entry:'./index.jsx',
    output:{
        filename:'./public/javascripts/index.js'
    },
    module:{
        rules:[
            {
                test:/\.jsx$/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    }
}
