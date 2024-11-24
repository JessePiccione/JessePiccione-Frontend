const path = require('path');
const nodeExternals = require('webpack-node-externals')
const TerserPlugin = require('terser-webpack-plugin');
const webpack  = require('webpack');

module.exports = {
    mode:'production',//enables optimizations including minification
    target:'node',//Specify environment is node 
    entry:'./server.js',//entry point of the server application
    output:{//output parameters for webpack
        path:path.resolve(__dirname, 'dist'),//directory where the production server build will be stored 
        filename:'server.bundle.js',//name of the new entry point // bundled server file 
        libraryTarget:'commonjs2',//telling javascript not to mess around and that it better support commonjs2 other wise known as node 
    },
    externals:[nodeExternals()], // not packing together node modules 
    module:{
        rules:[
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',   
                },
            },
            {
                test:/\.(css|scss|png|jpg|gif|svg)$/,
                use:'null-loader',
            },
        ],
    },
    resolve:{
        extensions:['.js', '.jsx'],
    },
    optimization:{
        minimize: true,
        minimizer:[ new TerserPlugin()]
    },
    devtool: 'source-map',// Generates source maps for easier debugginh 
    plugins:[
        new webpack.DefinePlugin({
            'process.env.API_URL':JSON.stringify(process.env.API_URL),
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
};