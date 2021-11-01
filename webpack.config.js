const path = require('path');
console.log(__dirname);

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
		hot: true,
		static: {
			directory: "./dist",
			watch: true
		}
  }
};