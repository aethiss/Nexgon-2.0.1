// process.env.NODE_ENV = 'test'
// const babelConfig = JSON.parse(require('fs').readFileSync(require('path').join(__dirname, '.babelrc')))

/* eslint-disable */
module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.spec.js?(x)', ignore: true },
      { pattern: 'src/**/*.js?(x)', instrument: true, load: false, ignore: false },
      'src/**/*.snap'
    ],
    tests: [
      'src/**/*.spec.js?(x)'
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: [
          'react-native'
        ],
        plugins: [
          'transform-flow-strip-types',
          'transform-object-rest-spread',
          'transform-async-to-generator',
        ],
      }),
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure(require('./package.json').jest);
    },
  };
};