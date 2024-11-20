module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        //contentBase: './dist',
        open: true,
        hot: true,
        port: 3001,
        //stats: {
            //children: false,
            //maxModules:0
        //}
    }
}