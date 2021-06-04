const os = process.env.OS || "UNIX";
// const os = "WINDOWS";

module.exports = {
  devServer: {
    compress: true,
    disableHostCheck: true
  },
  configureWebpack: config => {
    if (config && os === "WINDOWS") {
      return {
        devServer: {
          watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,
            poll: 1000
          }
        }
      };
    }
  }
};
