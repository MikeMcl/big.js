var count = (function sum(Big) {
    var start = +new Date(),
        log,
        error,
        undefined,
        passed = 0,
        total = 0;

    if (typeof window === 'undefined') {
        log = console.log;
        error = console.error;
    } else {
        log = function (str) { document.body.innerHTML += str.replace('\n', '<br>') };
        error = function (str) { document.body.innerHTML += '<div style="color: red">' +
          str.replace('\n', '<br>') + '</div>' };
    }

    if (!Big && typeof require === 'function') Big = require('../big');

    function assert(expected, actual) {
        total++;
        if (expected !== actual) {
           error('\n Test number: ' + total + ' failed');
           error(' Expected: ' + expected);
           error(' Actual:   ' + actual);
           //process.exit();
        }
        else {
            passed++;
            //log('\n Expected and actual: ' + actual);
        }
    }

    function assertException(func, message) {
        total++;
        try {
            func();
            error('\n Test number: ' + total + ' failed');
            error('\n Expected: ' + message + ' to throw an exception');
            error(' Actual:   no exception');
            //process.exit();
        } catch (e) {
            passed++;
            //log('\n Expected and actual: ' + e);
        }
    }

    function T(list, sum) {
        assert(String(sum), String(Big.sum(list.map(Big))));
    }

    log('\n Testing sum...');

    T([10, 20], 30);
    T([0.1, 0.2, 0.3, 0.4], 1);
    T([0.1, -2, 3.9, -5], -3);

    log('\n ' + passed + ' of ' + total + ' tests passed in ' + (+new Date() - start) + ' ms \n');
    return [passed, total];;
})(this.Big);
if (typeof module !== 'undefined' && module.exports) module.exports = count;
