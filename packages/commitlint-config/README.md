# @bluryar/commitlint-config

基于 [cz-git](https://cz-git.qbb.sh/zh/config/#%E9%85%8D%E7%BD%AE%E6%A8%A1%E6%9D%BF) 推荐的自用 [commitlint](https://github.com/conventional-changelog/commitlint) 和 [commitizen](https://github.com/commitizen-tools/commitizen) 配置。

借助 `cz-git` 实现 `commitlint` 和 `commitizen` 共用同一套配置。

## 用法 | Usage

1. **安装**

```bash
# npm install -D @bluryar/commitlint-config
pnpm add -D @bluryar/commitlint-config commitlint commitizen cz-git @commitlint/config-conventional
```

2. **配置文件**

在项目根目录下新建配置文件：`.commitlintrc.js`.

假如你的项目使用ESModule模块方案 - `package.json#type="module"`，那么建议指定模块后缀名 `.commitlintrc.cjs`.

_.commitlintrc.js_
```js
/**
 * @type {import('cz-git').UserConfig}
 */
module.exports = {
  extends: [
    '@bluryar',
  ],
}
```
