module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  devServer: {
    contentBase: './build',
  },
}
