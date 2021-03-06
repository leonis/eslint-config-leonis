# eslint-config-leonis [![npm version](https://badge.fury.io/js/eslint-config-leonis.svg)](https://badge.fury.io/js/eslint-config-leonis)

ESLint config for Leonis&amp;Co. projects.

[![CircleCI](https://circleci.com/gh/leonis/eslint-config-leonis.svg?style=svg)](https://circleci.com/gh/leonis/eslint-config-leonis)

# Install

```
$ npm install --save-dev eslint eslint-config-leonis
```

# Usage

```
$ npm run lint
```

Add some eslint config to your package.json:

```
  "scripts": {
    "lint": "eslint ."
  },
  "devDependencies": {
    "eslint": "^3.4.0",
    "eslint-config-leonis": "^0.x"
  },
  "eslintConfig": {
    "extends": "leonis"
  }
}
```

# Test

```
$ npm test
```

# License

see [LICENSE](https://github.com/leonis/eslint-config-leonis/blob/master/LICENSE).
