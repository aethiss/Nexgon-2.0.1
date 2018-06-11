/* eslint-disable */
module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.js?(x)', instrument: true, load: false, ignore: false },
      { pattern: 'src/**/*.spec.js?(x)', load: false, ignore: true },
      { pattern: "src/**/*.snap", load: false, instrument: false },
    ],
    tests: [
      'src/redux/**/__tests__/*.spec.js',
      'src/libs/**/__tests__/*.spec.js',
      'src/components/**/__tests__/*.spec.js'
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
