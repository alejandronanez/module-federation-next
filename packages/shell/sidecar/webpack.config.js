const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const webpackSharedConfig = require('../../utils/webpack-shared-config');
const { dependencies } = require('../package.json');

module.exports = {
  output: {
    publicPath: 'http://localhost:8000/',
  },

  resolve: webpackSharedConfig.resolve,

  devServer: {
    port: 8000,
  },

  module: {
    rules: webpackSharedConfig.module.rules,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Shell': '../src/components/Shell',
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
