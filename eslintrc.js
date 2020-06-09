module.exports = {
    root: true,
    parser: "babel-eslint",
    env: {
        'es6': true,
        node: true,
        brower:true
    },
    // extends: "airbnb",
    parserOptions: {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    rules: {
    // @off alert 很常用
    'no-alert': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    }
  };
  