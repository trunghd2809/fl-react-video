module.exports = {
  entry: './src/ekiio-video-react.scss',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib/',
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
}
