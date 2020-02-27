const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = env => {
  let mode = env.NODE_ENV|| "production";
  let prod = mode === "production";

  return {
    entry: {
      frontend: "./app/src/renderer/index.ts"
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist/renderer")
    },
    resolve: {
      alias: {
        svelte: path.resolve("node_modules", "svelte")
      },
      extensions: [".ts", ".mjs", ".js", ".svelte"],
      mainFields: ["svelte", "browser", "module", "main"]
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          include: path.resolve(__dirname, "app/src"),
          loader: "ts-loader"
        },
        {
          test: /\.(html|svelte)$/,
          include: path.resolve(__dirname, "app/src/renderer"),
          exclude: "/node_modules/",
          use: {
            loader: "svelte-loader",
            options: {
              emitCss: true,
              hotReload: true
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            prod ? MiniCssExtractPlugin.loader: 'style-loader',
            "css-loader"
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ],
    mode,
    devtool: prod ? false : "source-map"

  }
}
