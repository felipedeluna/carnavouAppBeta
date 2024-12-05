module.exports = {
    resolver: {
      sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'png', 'jpg', 'jpeg', 'gif', 'svg'],
    },
  };

const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

module.exports = config;
