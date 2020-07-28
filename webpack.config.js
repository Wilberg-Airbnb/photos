var BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');
module.exports = {
  entry: __dirname + '/client/app.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new BrotliGzipPlugin({
      asset: 'bundle.br',
      algorithm: 'brotli',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BrotliGzipPlugin({
      asset: 'bundle.gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },
};
