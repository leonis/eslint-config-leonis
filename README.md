[![Build Status](https://travis-ci.org/leonis/eslint-config-leonis.svg)](https://travis-ci.org/leonis/eslint-config-leonis)

# eslint-config-leonis

ESLint config for Leonis&amp;Co. projects.

# Install

```
$ npm install --save-dev eslint eslint-config-leonis
```

# Usage

## `npm run lint`

Add some ESlint config to your package.json:

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

Then lint with `$ npm run lint`.

# Test

```
$ npm run test
```

# License

see README.
