const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/redux-test.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
