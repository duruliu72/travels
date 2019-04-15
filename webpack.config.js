const path = require('path');
module.exports = {
  entry: './docs/assets/scripts/App.js',
  output: {
    filename: 'App.js',
    path: path.resolve(__dirname, './docs/temp/scripts')
  }
};