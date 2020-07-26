const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const webpackSharedConfig = require('../../utils/webpack-shared-config');
const { dependencies } = require('../package.json');

module.exports = {
  output: {
    publicPath: 'http://localhost:8001/',
  },

  resolve: webpackSharedConfig.resolve,

  module: {
    rules: webpackSharedConfig.module.rules,
  },

  devServer: {
    port: 8001,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'homepage',
      filename: 'remoteEntry.js',
      remotes: {
        shell: 'shell',
        jobs: 'jobs',
      },
      exposes: {
        './Homepage': '../src/pages/index.tsx',
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
