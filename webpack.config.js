const { VueLoaderPlugin } = require('vue-loader')
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  mode: 'development',
  resolve: {
    alias: {
        vue: 'vue/dist/vue.js'
    },
  },
  optimization: {
    minimize: true,
    minimizer: [      
      new TerserPlugin({
        parallel: true,
        extractComments: 'all',
        terserOptions: { },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {hotreload:true} 
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
}