# big.js

**A small, fast JavaScript library for arbitrary-precision decimal arithmetic.**

The little sister to [bignumber.js](https://github.com/MikeMcl/bignumber.js/) and [decimal.js](https://github.com/MikeMcl/decimal.js/). See [here](https://github.com/MikeMcl/big.js/wiki) for some notes on the difference between them.

## Features

  - Faster, smaller and easier-to-use than JavaScript versions of Java's BigDecimal
  - Only 5.9 KB minified and 2.7 KB gzipped
  - Simple API
  - Replicates the `toExponential`, `toFixed` and `toPrecision` methods of JavaScript's Number type
  - Includes a `sqrt` method
  - Stores values in an accessible decimal floating point format
  - No dependencies
  - Comprehensive [documentation](http://mikemcl.github.io/big.js/) and test set

## Install

[Node.js](http://nodejs.org) users can install from the [npm](https://www.npmjs.com/package/big.js) registry using

    $ npm install --save big.js

## Use

The library is the single JavaScript file *big.js* (or *big.min.js*, which is *big.js* minified).

It can be loaded via a script tag in an HTML document for the browser

    <script src='./relative/path/to/big.js'></script>

or as a CommonJS, Node.js or AMD module using `require`.

    var Big = require('big.js');

If using an ES6 transpiler, or Node.js with the [`--experimental-modules`](https://nodejs.org/api/esm.html) flag, try

    import Big from './big';

*In all examples below, `var`, semicolons and `toString` calls are not shown. If a commented-out value is in quotes it means `toString` has been called on the preceding expression.*

The library exports a single function, `Big`, the constructor of Big number instances.
It accepts a value of type number, string or Big number object.

    x = new Big(123.4567)
    y = Big('123456.7e-3')             // 'new' is optional
    z = new Big(x)
    x.eq(y) && x.eq(z) && y.eq(z)      // true

A Big number is immutable in the sense that it is not changed by its methods.

    0.3 - 0.1                          // 0.19999999999999998
    x = new Big(0.3)
    x.minus(0.1)                       // "0.2"
    x                                  // "0.3"

The methods that return a Big number can be chained.

    x.div(y).plus(z).times(9).minus('1.234567801234567e+8').plus(976.54321).div('2598.11772')
    x.sqrt().div(y).pow(3).gt(y.mod(z))    // true

Like JavaScript's Number type, there are `toExponential`, `toFixed` and `toPrecision` methods.

    x = new Big(255.5)
    x.toExponential(5)                 // "2.55500e+2"
    x.toFixed(5)                       // "255.50000"
    x.toPrecision(5)                   // "255.50"

The arithmetic methods always return the exact result except `div`, `sqrt` and `pow`
(with negative exponent), as these are the methods which involve division.

The maximum number of decimal places and the rounding mode used to round the results of these methods is determined by the value of the `DP` and `RM` properties of the `Big` number constructor.

    Big.DP = 10
    Big.RM = 1

    x = new Big(2);
    y = new Big(3);
    z = x.div(y)                       // "0.6666666667"
    z.sqrt()                           // "0.8164965809"
    z.pow(-3)                          // "3.3749999995"
    z.times(z)                         // "0.44444444448888888889"
    z.times(z).round(10)               // "0.4444444445"

Multiple Big number constructors can be created, each with an independent configuration.

The value of a Big number is stored in a decimal floating point format in terms of a coefficient, exponent and sign.

    x = new Big(-123.456);
    x.c                                // [1,2,3,4,5,6]    coefficient (i.e. significand)
    x.e                                // 2                exponent
    x.s                                // -1               sign

For further information see the [API](http://mikemcl.github.io/big.js/) reference from the *doc* folder.

## Test

The *test* directory contains the test scripts for each Big number method.

The tests can be run with Node.js or a browser.

To run all the tests

    $ npm test

To test a single method

    $ node test/toFixed

For the browser, see *single-test.html* and *every-test.html* in the *test/browser* directory.

*big-vs-number.html* is a simple application that enables some of the methods of big.js to be compared with those of JavaScript's Number type.

## Performance

The *perf* directory contains two old applications and a *lib* directory containing the BigDecimal libraries used by both.

*big-vs-bigdecimal.html* tests the performance of big.js against the JavaScript translations of two versions of BigDecimal, its use should be more or less self-explanatory.

* [GWT: java.math.BigDecimal](https://github.com/iriscouch/bigdecimal.js)
* [ICU4J: com.ibm.icu.math.BigDecimal](https://github.com/dtrebbien/BigDecimal.js)

The BigDecimal in the npm registry is the GWT version. Despite its seeming popularity I have found it to have some serious bugs, see the Node.js script *perf/lib/bigdecimal_GWT/bugs.js* for examples of flaws in its *remainder*, *divide* and *compareTo* methods.

*bigtime.js* is a Node.js command-line application which tests the performance of big.js against the GWT version of
BigDecimal from the npm registry.

For example, to compare the time taken by the big.js `plus` method and the BigDecimal `add` method

    $ node bigtime plus 10000 40

This will time 10000 calls to each, using operands of up to 40 random digits and will check that the results match.

For help

    $ node bigtime -h

## Build

If [uglify-js](https://github.com/mishoo/UglifyJS2) is installed globally

    $ npm install uglify-js -g

then

    $ npm run build

will create *big.min.js*.

## TypeScript

The [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) project has a Typescript type definitions file for big.js.

    $ npm install --save @types/big.js

Any questions about the TypeScript type definitions file should be addressed to the DefinitelyTyped project.

## Feedback

Bugs/comments/questions?

Open an issue, or email <a href="mailto:M8ch88l@gmail.com">Michael</a>

## Licence

[MIT](LICENCE)
