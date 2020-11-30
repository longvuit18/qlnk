/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// const ts = require("typescript");
// const tsConfig = require("./tsconfig.json");
// const TSLintPlugin = require("tslint-webpack-plugin");

const config = {
    entry: {
        "app": "./src/index.tsx"
    },
    node: {
        fs: "empty"
     },

    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            // eslint-disable-next-line no-undef
            template: __dirname + "/src/index.html",
        }),

    ],

    module: {
        rules: [
        
            {
                test: /^((?!\.test\.ts).)*\.tsx?$/, 
                loader: "awesome-typescript-loader"
            },
            
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader"
            }
        ]
    }
};

// eslint-disable-next-line no-undef
module.exports = (env, argv) => {
    let output = {};
    let plugins = config.plugins;
    let module = config.module;

    module = {
        rules: [
            ...module.rules,
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: argv.mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader, // inject CSS to page
                    },
                    "css-loader", // translates CSS into CommonJS modules
                 
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    };

    switch (argv.mode) {
        case "development":
            output = {
                filename: "[name].[hash].js",
                // eslint-disable-next-line no-undef
                path: __dirname + "/dist",
                publicPath: "/"
            };

            plugins = [
                ...plugins,
                new webpack.HotModuleReplacementPlugin(),
                new webpack.DefinePlugin({
                    SERVER_API_URI: "\"http://localhost:3000/\"",
                    
                }),
                
            ];
            break;

        case "production":
        default:
            output = {
                filename: "[name].[contenthash].js",
                // eslint-disable-next-line no-undef
                path: __dirname + "/dist"
            };

            plugins = [
                ...plugins,
                new MiniCssExtractPlugin({
                    filename: "[name].[hash].css",
                    chunkFilename: "[id].[hash].css",
                })

                // For production environment, tslint is an extra step in the build order.
            ];
            break;
    }

    if (argv.mode === "development")
        return {
            ...config,
            module,
            output,
            plugins,

            devtool: "source-map",
            devServer: {
                contentBase: "./dist",
                hot: true,
                historyApiFallback: true,
                // compress: true,
                // https: true
            }
        }

    return {
        ...config,
        module,
        output,
        plugins
    };
}
