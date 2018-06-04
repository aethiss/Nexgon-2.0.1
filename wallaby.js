/* eslint-disable */
module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/redux/**/*.js?(x)', instrument: true, load: false, ignore: false },
      { pattern: 'src/**/*.spec.js?(x)', ignore: true },
      'src/**/*.snap'
    ],
    tests: [
      'src/redux/**/__tests__/*.spec.js?(x)'
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
