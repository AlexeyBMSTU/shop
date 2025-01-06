const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'), 
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'] 
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i, 
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'sass-loader' 
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/', 
            },
          },
        ],
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
    open: true,
    proxy: [
      {
        context: "/api/home/images",
        target: "http://localhost:5000",
        changeOrigin: true,
        pathRewrite: {
          "^/api/home/images": "/images",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', 
      chunkFilename: '[id].css',
    }),
  ],
  mode: 'development'
};