'use strict';

module.exports = {
  extends: 'google',
  rules: {
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "no-var": 2
  }
};
