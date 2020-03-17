<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

# rocketseat-bootcamp2020-module04

ReactJS - Fundamental Concepts

# What is this project about?

This project is about learning how the set up the initial configurations of a 
ReactJS project and its fundamental concepts.

## How to run this project?

  - Install dependencies:
    - `yarn`
  - Start webpack server:
    - `yarn dev`

## Logbook
### Day 01 - 2020/03/09
#### Setting up the project structure
  * Created babel.config.js

```javascript
module.exports = {
  presets: [
    // change javascript functionalities that are not browser compatible yet (transpile)
    // e.g: import/export, arrow functions, etc...
    '@babel/preset-env',  
    // change react functionalities that are not browser compatible yet
    // e.g.: JSX, etc...
    '@babel/preset-react'
  ],
  // allows declaring the state variable withou a constructor() {}
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};
```

  * Created webpack.config.js 

  ```javascript
  const path = require('path');

  module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    // where the transpiled code will be stored
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
      // Webpack needs to know how handle each file extension
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }, {
          test: /\.css$/,
          use: [
            // It will load css styles into index.html in a style tag
            { loader: 'style-loader' },
            // It will handle imports in css files
            { loader: 'css-loader' }
          ]
        }
      ]
    }
  }
  ```

  * Created src/index.js
    - Main Javascript file in the application
  * Created ./public
    -  It will store transpiled code in bundle.js