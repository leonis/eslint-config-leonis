const config = require('../index.js');
const eslint = require('eslint');
const test = require('tape');
const tempWrite = require('temp-write');

const cli = new eslint.CLIEngine({
  useEslintrc: false,
  configFile: tempWrite.sync(JSON.stringify(config))
});

test('when const is valid variable type', function(assert) {
  const code = 'const foo = 1;\nconst bar = function() {};\nbar(foo);\n';
  const expected = 0;

  assert.equal(cli.executeOnText(code).errorCount, expected);
  assert.end();

});