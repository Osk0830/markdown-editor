const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/',
  },
  devServer: {
    static: {
      directory: __dirname, // ルート直下を配信
      publicPath: '/',      // http://localhost:8080/ で index.html が見える
    },
    hot: true,
    open: true,
  }
}
