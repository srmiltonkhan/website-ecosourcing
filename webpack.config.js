const path = require('path');

module.exports = {
  // other configurations...

  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
    },
  },

  // other configurations...
};
