# eslint-config-leonis

ESLint config for Leonis&amp;Co. projects.

# Install

```
$ npm install --save-dev eslint eslint-config-leonis
```

# Usage

## `npm run lint`

Add some ESlint config to your pckage.json:

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

# License

see README.
