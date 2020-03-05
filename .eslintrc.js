module.exports = {
    "env": [
      'plugin:vue/essential',
      'eslint:recommended',
      '@vue/prettier'
    ],

    "extends": 'plugin:vue/recommended',

    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },

  

    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        parser: 'babel-eslint',
        allowImportExportEverywhere: true
    },

    "plugins": [
        "vue"
    ],

    "rules": {
    },

    root: true,

    env: {
      browser: true,
      es6: true,
      node: true
    },

    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      allowImportExportEverywhere: true,
      parser: 'babel-eslint'
    },

    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
};
