const path = require('path')

module.exports = {
  // entry: './src/index.tsx',
  entry: {
    index: './src/index.tsx',
    convert_markdown_worker: './src/worker/convert_markdown_worker.ts'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }, ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'index.js',
  //   // publicPath: '/dist/',
  //   publicPath: process.env.NODE_ENV === 'production' ?
  //     '/markdown-editor/dist/' : '/dist/',
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      '/markdown-editor/dist/' :
      '/dist/',
  },
  devServer: {
    static: {
      directory: __dirname,
      publicPath: '/',
    },
    hot: true,
    open: true,
  }
}