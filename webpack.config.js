module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'public/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        //include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};