const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
const pluginConfig = require("./src/config");
pluginConfig.version = pkg.version;


function buildMeta(config) {
    if (config.info) config = config.info;
    const metaString = ["/**"];
    const line = (label, val) => val && metaString.push(` * @${label} ${val}`);
    line("name", config.name);
    line("description", config.description);
    line("version", config.version);
    line("author", config.author ?? config?.authors.map(a => a.name).join(", "));
    line("authorId", config.authorId ?? config?.authors?.[0].id ?? config?.authors?.[0].discord_id);
    line("authorLink", config.authorLink ?? config?.authors?.[0].link);
    line("website", config.website ?? config.github);
    line("source", config.source ?? config.github_raw ?? config.github);
    line("donate", config.donate);
    line("patreon", config.patreon);
    line("invite", config.invite);
    metaString.push(" */");
    metaString.push("");
    return metaString.join("\n") + "\n";
}


module.exports = {
  mode: "development",
  target: "node",
  devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "PublicServers.plugin.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
    libraryExport: "default",
    compareBeforeEmit: false
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {test: /\.css$/, type: "asset/source"}
    ]
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.BannerPlugin({raw: true, banner: buildMeta(pluginConfig)}),
    {
      apply: (compiler) => {
        compiler.hooks.assetEmitted.tap("CopyToBD", (filename, info) => {
          /* eslint-disable no-console */
          if (!pkg.copyToBD) return;

          const bdFolder = (process.platform == "win32" ? process.env.APPDATA : process.platform == "darwin" ? process.env.HOME + "/Library/Preferences" : process.env.XDG_CONFIG_HOME ? process.env.XDG_CONFIG_HOME : process.env.HOME + "/.config") + "/BetterDiscord/";
          fs.copyFileSync(info.targetPath, path.join(bdFolder, "plugins", filename));
          console.log(`\n\n✅ Copied to BD folder\n`);
        });
      }
    },
    
  ]
};