var webpack = require('webpack');
var path = require('path');
var htmlwebpackplugin = require('html-webpack-plugin');
const V_LIBS = [
  'react','lodash','redux','react-redux','react-dom','faker','react-input-range','redux-form','redux-thunk'
]

module.exports = {
  //entry: './src/index.js',
  entry : {
    //Defining file name : input
    // of multiple entry
    bundle : './src/index.js',
    vendor : V_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // static file name
    //filename: 'bundle.js'

    //Name we define in entry will replace in name specifier []
    //filename : '[name].js',

    // Cache busting
    filename : '[name][chunkhash].js'

  },
  module : {
    rules: [
      {
        use : 'babel-loader',
        test : /\.js$/,
        exclude : /node_modules/
      },
      {
        use: ['style-loader','css-loader'],
        test : /\.css$/
    }
    ]
  },
  // to remove common imported (used in main js code any node modules or other dependencies) js and move to specified file in below
  plugins:
  [
    new webpack.optimize.CommonsChunkPlugin 
    ({
      //name : 'vendor'
      names : ['vendor','manifest']
    }),
    //generates same template in dist build directory
    new htmlwebpackplugin({
      template : './src/index.html'
    }),
    // to run in production mode and we are passinb through package hence we need this variable.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
