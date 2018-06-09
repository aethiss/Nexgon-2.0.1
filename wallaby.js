/* eslint-disable */
module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.js?(x)', instrument: true, load: false, ignore: false },
      { pattern: 'src/**/*.spec.js?(x)', load: false, ignore: true },
      { pattern: "src/**/*.snap", load: false, instrument: false },
    ],
    tests: [
      'src/**/__tests__/*.spec.js?(x)'
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: require('babel-core')
      }),
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure(require('./package.json').jest);
    },
  };
};
