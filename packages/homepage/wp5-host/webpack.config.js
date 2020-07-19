const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:8001/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 8001,
  },

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
          // {
          //   loader: 'ts-loader',
          // },
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

  plugins: [
    new ModuleFederationPlugin({
      name: 'homepage',
      library: { type: 'var', name: 'homepage' },
      filename: 'remoteEntry.js',
      remotes: {
        homepage: 'homepage',
        shell: 'shell',
      },
      exposes: {
        './Homepage': '../src/pages/index.tsx',
      },
      shared: require('../package.json').dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
