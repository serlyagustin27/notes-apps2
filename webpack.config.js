const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/script.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
  },


  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'], 
      },
    ],
  },
};
