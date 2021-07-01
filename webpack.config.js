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
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env", require('autoprefixer')],
              },},},
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}