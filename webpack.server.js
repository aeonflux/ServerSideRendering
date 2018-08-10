const path = require("path");

module.exports = {
  //Informing Webpack
  //Building a NodeJS rather than for browser
  target: "node",

  //Identifies the root file of server application
  entry: "./src/index.js",

  //Identifies where to put output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  //Run Babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          //set rules for babel loader
          presets: [
            //JSX to JS
            "react",
            //Async
            "stage-0",
            //Master preset - run transform rules that meet the latest 2 version of all browsers
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
