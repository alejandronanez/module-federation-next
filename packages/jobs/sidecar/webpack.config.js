const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const webpackSharedConfig = require('../../utils/webpack-shared-config');
const { dependencies } = require('../package.json');

module.exports = {
  output: {
    publicPath: 'http://localhost:8002/',
  },

  resolve: webpackSharedConfig.resolve,

  module: {
    rules: webpackSharedConfig.module.rules,
  },

  devServer: {
    port: 8002,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'jobs',
      filename: 'remoteEntry.js',
      remotes: {
        shell: 'shell',
        homepage: 'homepage',
      },
      exposes: {
        './FeaturedJob': '../src/components/FeaturedJob',
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
