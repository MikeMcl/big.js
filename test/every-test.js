var arr,
    passed = 0,
    total = 0,
    start = +new Date();

console.log( '\n STARTING TESTS...\n' );

[
  'abs',
  'div',
  'cmp',
  'minus',
  'mod',
  'plus',
  'pow',
  'round',
  'sqrt',
  'times',
  'toExponential',
  'toFixed',
  'toPrecision',
  'toString'
]
.forEach( function (method) {
    arr = require('./' + method);
    passed += arr[0];
    total += arr[1];
});

console.log( '\n RESULTS: ' + passed + ' of ' + total + ' tests passed in ' +
    ( (+new Date() - start) / 1000 ) + ' secs.\n' );