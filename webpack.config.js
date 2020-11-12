const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',

  entry: './src/index.jsx',

  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          { loader: 'babel-loader' },
          { loader: '@mdx-js/loader' },
        ],
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],

  // This disables minification for simpler comparison
  optimization: {
    minimizer: [],
  },
}
