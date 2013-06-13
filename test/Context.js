var count = (function (Big) {
    var start = +new Date(),
        log,
        error,
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

    function T(expected, value){
        assert(String(expected), value.toString());
    }

    log('\n Testing Big.Context...');

    Big.DP = 0;
    Big.RM = 1;

    var x = Big('7'); // RM is 1
    var context = Big.Context({'RM': 0}); // original defaults for others
    var y = context.Big('7'); // RM is 0

    T(1, x.context.RM);
    T(0, y.context.RM);
    T(4, x.div(2));
    T(3, y.div(2));

    var z = Big('2'); // RM is 1
    T(3, y.div(z));

    log('\n ' + passed + ' of ' + total + ' tests passed in ' + (+new Date() - start) + ' ms \n');
    return [passed, total];;
})(this.Big);
if (typeof module !== 'undefined' && module.exports) module.exports = count;