// Add `test` to global scope.
test = (function () {
  var count, passed, write;

  if (typeof window != 'undefined') {
    write = function (str) {
      document.body.innerHTML += str.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
    };
  } else {

    // Add `Big` to global scope.
    Big = require('../big');
    write = process.stdout.write.bind(process.stdout);
  }

  function fail(count, expected, actual) {
    write('\n  Test number ' + count + ' failed' + '\n  Expected: ' + expected + '\n  Actual:   ' + actual);
    //process.exit();
  }

  function isBigZero(n) {
    return n && n.c && n.c.length === 1 && n.c[0] === 0 && n.e === 0 && (n.s === 1 || n.s === -1);
  }

  function test(name, func) {
    var time;
    write(' Testing ' + name + '...');
    passed = count = 0;
    time = new Date();
    func();
    time = new Date() - time;
    test.result = [passed, count, time];
    if (passed !== count) write('\n');
    write(' ' + passed + ' of ' + count + ' tests passed in ' + time + ' ms\n');
  }

  test.areEqual = function (expected, actual) {
    ++count;

    // If expected and actual are both NaN, consider them equal.
    if (expected === actual || expected !== expected && actual !== actual) {
      ++passed;
      //write('\n Expected and actual: ' + actual);
    } else {
      fail(count, expected, actual);
    }
  };

  test.isException = function (func, msg) {
    var actual;
    ++count;
    try {
      func();
    } catch (e) {
      actual = e;
    }
    if (actual instanceof Error && /\[big\.js\]/.test(actual.message)) {
      ++passed;
    } else {
      fail(count, (msg + ' to raise an fail.'), (actual || 'no exception'));
    }
  };

  test.isNegativeZero = function (actual) {
     ++count;
    if (isBigZero(actual) && actual.s === -1) {
      ++passed;
    } else {
      fail(count, 'negative zero', actual);
    }
  };

  test.isPositiveZero = function (actual) {
     ++count;
    if (isBigZero(actual) && actual.s === 1) {
      ++passed;
    } else {
      fail(count, 'positive zero', actual);
    }
  };

  test.isTrue = function (actual) {
    ++count;
    if (actual === true) {
      ++passed;
    } else {
      fail(count, 'true', actual);
    }
  };

  test.write = write;

  return test;
})();
