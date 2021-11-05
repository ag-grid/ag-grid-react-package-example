const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../src-examples');

module.exports = {
    mode: 'development',
    entry: SRC_DIR + "/index.js",
    output: {
        path: path.resolve(__dirname, '../'),
        filename: "dist/react-examples.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$|\.jsx$/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: [
                        require('@babel/plugin-proposal-function-bind'),
                        require('@babel/plugin-proposal-class-properties')
                    ]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=[path]/[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            "ag-grid-community": path.resolve('./node_modules/ag-grid-community'),
            "ag-grid-enterprise": path.resolve('./node_modules/ag-grid-enterprise'),
            react: path.resolve('./node_modules/react')
        },
        extensions: ['.js', '.jsx']
    },
    performance: {
        hints: false
    },
    devtool: 'inline-source-map',
    devServer: {
        public: 'http://localhost:8080',
        port: 8080,
        historyApiFallback: true
    }
};
