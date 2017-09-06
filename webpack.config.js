var webpack = require('webpack');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:3000');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    index: getEntrySources([
      './js/index.js'
    ])
  },
  output: {
    publicPath: 'http://localhost:3000/',
    filename: 'public/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot-loader', 'babel-loader'/*, 'eslint'*/],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      "Tether": 'tether',
      'Popper': 'popper.js'
    })
  ]
};