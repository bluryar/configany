const preset = require('eslint-config-alloy/.prettierrc.js')

// .prettierrc.js
module.exports = {
  ...preset,
  // 不允许分号
  semi: false,
}
