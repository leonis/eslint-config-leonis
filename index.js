'use strict';

module.exports = {
  extends: 'google',
  env: {
    node: true,
    es6: true,
    mocha: true
  },
  rules: {
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "prefer-template": ["error"],
    "no-var": 2,
    "camelcase": ["error", {
      "properties": "never"
    }],
    "new-cap": ["error", {
      "capIsNew": false
    }],
    "arrow-parens": ["error", "always"],
    "max-len": ["error", {
      "code": 100,
      "ignoreComments": true,
      "ignoreUrls": true,
      "ignoreTemplateLiterals": true
    }],
    "no-console": ["error"]
  }
};
