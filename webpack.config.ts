import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {Configuration} from 'webpack';

const config: Configuration & any = {
  mode: "development",
  entry: './src/entry.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader', options: {
              presets: [
                ['@babel/preset-env', {
                  targets: {
                    "ie": 11
                  }
                }],
                '@babel/preset-react'
              ]
            }
          },
          'ts-loader'
        ]
      }]
  },
  plugins: [
    new HtmlWebpackPlugin() as any
  ]
}

export default config;
