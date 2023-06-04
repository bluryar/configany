// eslint-disable-next-line @typescript-eslint/no-require-imports
require('@rushstack/eslint-patch/modern-module-resolution')

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    '@bluryar/vue',
    './playgrounds/vitesse/auto-imports-eslintrc.json',
  ],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    es6: true,
    browser: true,
    node: true,
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
    defineOptions: true,
    defineModels: true,
  },
}
