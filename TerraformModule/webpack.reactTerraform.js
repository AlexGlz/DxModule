const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DllPlugin } = require('webpack');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
    entry: {
        terraform: './modules-index.js'
    },
    mode: "production",
    target: 'web',
    node: { global: true },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist-dx-module"),
        library: "[name]"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css",
        })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
                exclude: [
                    /smart-/
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.svg/,
                type: 'asset/inline',
                generator: {
                    dataUrl: content => {
                        content = content.toString();
                        return svgToMiniDataURI(content);
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/,
                type: 'asset'
            },
        ]
    },
};
