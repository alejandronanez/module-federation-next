const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const webpackSharedConfig = require('../../utils/webpack-shared-config');

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
      library: { type: 'var', name: 'shell' },
      filename: 'remoteEntry.js',
      remotes: {
        shell: 'shell',
        homepage: 'homepage',
      },
      exposes: {
        './Shell': '../src/components/Shell',
      },
      shared: require('../package.json').dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
