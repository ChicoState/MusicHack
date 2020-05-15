module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/all"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-typos": "error",
      "react/no-multi-comp": "error",
      "react/no-unsafe": "error",
      "complexity": [2, 2],
    }
};
