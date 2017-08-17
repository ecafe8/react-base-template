const path = require('path');

module.exports = (config) => {
  return config.resolve = {
    ...config.resolve,
    alias: {
      components: path.resolve(process.cwd(), './src') + '/components',
    }
  }
};
