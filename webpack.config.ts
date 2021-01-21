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
                  useBuiltIns: 'usage',
                  corejs: {
                    version: '3.8', // works for "useBuiltIns: usage", just specify a.b, not a.b.c
                    proposals: true
                  },
                  targets: "defaults, ie 11"
                }]
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
