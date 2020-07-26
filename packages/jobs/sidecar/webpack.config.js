const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../package.json');

const PUBLIC_PATH = process.env.PUBLIC_PATH || 'http://localhost:8003/';

module.exports = {
  output: {
    publicPath: PUBLIC_PATH,
  },

  resolve: { extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'] },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                '@babel/preset-typescript',
                '@babel/preset-env',
              ],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        ],
      },
    ],
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
    new webpack.DefinePlugin({
      'process.env.PUBLIC_PATH': JSON.stringify(PUBLIC_PATH),
    }),
  ],
};
