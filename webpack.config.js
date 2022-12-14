// WebPack empaqueta nuestro codigo para la produccion, prepara el proyecto para el despliegue

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    output:{clean:true},
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /globalStyle.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /globalStyle.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Webpack Demo',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ]
}