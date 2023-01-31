const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// mode configuration
var mode_config = {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    aggregateTimeout: 500,
    ignored: ["**/node_modules", "**/dist"],
  },
  stats: "errors-warnings"
};

// common configuration
var config = Object.assign({}, mode_config, {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
});

// configuration for background & static files (ex: manifest.json) in public folder
var background_config = Object.assign({}, config, {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "background.bundle.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "public/img"),
          to: path.resolve(__dirname, "dist/img"),
        },
      ],
    }),
  ],
});

// configuration for options
var options_config = Object.assign({}, config, {
  entry: {
    options: "./src/options/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/options"),
    filename: "options.bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "options.bundle.css" }),
    new HtmlWebpackPlugin({
      filename: "options.html",
      template: "./src/options/index.html",
      inject: "body",
    }),
  ],
});

// configuration for warn
var warn_config = Object.assign({}, config, {
  entry: {
    warn: "./src/warn/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/warn"),
    filename: "warn.bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "warn.bundle.css" }),
    new HtmlWebpackPlugin({
      filename: "warn.html",
      template: "./src/warn/index.html",
      inject: "body",
    }),
  ],
});

module.exports = [background_config, options_config, warn_config];
