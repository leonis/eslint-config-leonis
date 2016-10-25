'use strict';

module.exports = {
  extends: 'google',
  rules: {
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "no-var": 2,
    "camelcase": ["error", {
      "properties": "never"
    }],
    "new-cap": ["error", {
      "capIsNew": false
    }],
    "arrow-parens": ["error", "always"]
  }
};
