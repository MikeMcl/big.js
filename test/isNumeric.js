var count = (function isNumeric(Big) {
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
        } else {
            passed++;
            //log('\n Expected and actual: ' + actual);
        }
    }

    log('\n Testing isNumeric...');

    assert(true, Big.isNumeric(42))
    assert(true, Big.isNumeric('42'))
    assert(true, Big.isNumeric('-42.42000005'))
    assert(true, Big.isNumeric(0))
    assert(true, Big.isNumeric(-0))
    assert(true, Big.isNumeric(+0))

    assert(false, Big.isNumeric('NaN'))
    assert(false, Big.isNumeric(''))
    assert(false, Big.isNumeric(false))
    assert(false, Big.isNumeric(true))
    assert(false, Big.isNumeric(NaN))
    assert(false, Big.isNumeric(undefined))
    assert(false, Big.isNumeric(null))
    assert(false, Big.isNumeric('1.000X'))
    assert(false, Big.isNumeric('X100'))

    log('\n ' + passed + ' of ' + total + ' tests passed in ' + (+new Date() - start) + ' ms \n');
    return [passed, total];;
})(this.Big);
if (typeof module !== 'undefined' && module.exports) module.exports = count;
