var path = require('path');

module.exports = {
  mode: 'development',
  entry: './example.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  }
};