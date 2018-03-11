var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR,
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            { 
                test: /\.json$/, 
                loader: "json-loader" 
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    } 
                  }
                ]
              }
        ]
    },
    resolve: {
        modules: ['src','node_modules'],
        extensions: ['.json', '.js']
    }
};

module.exports = config;
