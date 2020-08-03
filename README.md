# React App Using webpack

## Setup Webpack

```bash
# create folder
mkdir react-app && cd react-app

# create package.json using pnpm init
pnpm init -y

# install Webpack and Webpack dev server
pnpm i -D webpack webpack-{cli,dev-server}

# install babel packages
pnpm i -D @babel/{core,preset-env,preset-react} babel-loader

# update package.json
`package.json`
...
"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack --mode production"
}
...

```

Create `.babelrc`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Create a file named `webpack.config.js`

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```

### Setup ReactJS

```bash
# install react and react-dom
pnpm i react react-dom

# create folder
mkdir -p src/js/pages
```

**create** `src/js/pages/home_page.js`

```javascript
import React from "react";

function HomePage {
  return (
    <div>
      Home Page
    </div>
  );
}

export default HomePage;
```

**create** `src/js/App.js`

```javascript
import React from "react";
import HomePage from './pages/home_page';

function App() {
  return (
    <>
      <HomePage />
    </>
  )
}

export default App;
```

**create** `src/index.js`

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";

ReactDOM.render(
  <App />,
  document.getElementById("container")
);
```

### Build

```bash
pnpm run build
```

### Setup html webpack plugin

```bash
# install html package
pnpm i -D html-{webpack-plugin,loader}
```

**update Webpack configuration**

```javascript
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
```

Create an HTML file in `src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>How to set up React, Webpack, and Babel</title>
</head>
<body>
    <div id="container"></div>
</body>
</html>
```

## RUN

```bash
pnpm start
```

