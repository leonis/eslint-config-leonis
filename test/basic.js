const config = require('../index.js');
const test = require('tape');
const isPlainObject = require('is-plain-obj');

test('test basic properties of config', function (assert) {
  assert.ok(isPlainObject(config.rules));
  assert.end();
});