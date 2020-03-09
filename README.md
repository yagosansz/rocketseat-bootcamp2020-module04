<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

# rocketseat-bootcamp2020-module04

ReactJS - Fundamental Concepts

# What is this project about?

This project is about practicing the basic concepts behind NodeJS that 
were learned during the second module of GoStack 10 - Bootcamp.

## How to run this project?

  - Install dependencies:
    - `yarn`
  - Start the back-end:
    - `yarn dev`

## Logbook
### Day 01 - 2020/03/09
#### Setting up the project structure
  * Created babel.config.js

```javascript
module.exports = {
  presets: [
    // change javascript functionalities that are browser compatible yet (transpile)
    // e.g: import/export, arrow functions, etc...
    '@babel/preset-env',  
    // change react functionalities that are browser compatible yet
    // e.g.: JSX, etc...
    '@babel/preset-react'
  ],
};
```

  * Created webpack.config.js 

  ```javascript
  const path = require('path');

  module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
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
        }
      ]
    }
  }
  ```

  * Created src/index.js
    - Main Javascript file in the application
  * Created ./public
    -  It will store transpiled code in bundle.js