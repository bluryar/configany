# @bluryar/eslint-config-vue

这一份配置继承自 [antfu/eslint-config](https://github.com/antfu/eslint-config) ，自用，在后续使用过程中会陆续继承个性化的配置。

## 用法 | Usage

1. **安装**

```bash
pnpm add -D eslint @bluryar/eslint-config-vue
```

2. **配置**

_.eslintrc.js_
```js
// ts语法部分是否遵循 `tsconfig` 中的相关配置
// process.env.ESLINT_TSCONFIG = 'tsconfig.json'

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    '@bluryar/vue',
  ],
}
```
