module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/no-explicit-any": ["off"],
    '@typescript-eslint/no-var-requires': 0,
    // html属性必须换行
    'vue/max-attributes-per-line': 'off',
    // 没有内容的元素需要使用闭合标签
    'vue/html-self-closing': 'off',
    // 
    "vue/comment-directive": 'off',
    // 禁止使用 var
    'no-var': 'error',
    // 必须全等
    'eqeqeq': 2,
  },
}
