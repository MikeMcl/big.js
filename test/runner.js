var passed = 0;
var total = 0;
var start = +new Date();

console.log( '\n Testing big.js\n' );

[
  'abs',
  'cmp',
  'div',
  'minus',
  'mod',
  'neg',
  'plus',
  'pow',
  'prec',
  'round',
  'sqrt',
  'times',
  'toExponential',
  'toFixed',
  'toNumber',
  'toPrecision',
  'toString'
]
.forEach(function (method) {
  arr = require('./methods/' + method);
  passed += test.result[0];
  total += test.result[1];
});

console.log( '\n In total, ' + passed + ' of ' + total + ' tests passed in ' +
  ( (+new Date() - start) / 1000 ) + ' secs.\n' );