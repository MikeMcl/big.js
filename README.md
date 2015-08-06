# big.js

---

## Intro

A small, fast JavaScript library for arbitrary-precision decimal arithmetic.

The little sister to [bignumber.js](https://github.com/MikeMcl/bignumber.js/).
See also [decimal.js](https://github.com/MikeMcl/decimal.js/), and [here](https://github.com/MikeMcl/big.js/wiki) for the difference between them.

## Features

  - Faster, smaller and easier-to-use than JavaScript versions of Java's BigDecimal
  - Only 2.7 KB minified and gzipped
  - Simple API
  - Replicates the `toExponential`, `toFixed` and `toPrecision` methods of JavaScript's Number type
  - Includes a `sqrt` method
  - Stores values in an accessible decimal floating point format
  - No dependencies
  - Comprehensive [documentation](http://mikemcl.github.io/big.js/) and test set

## Load

The library is the single JavaScript file *big.js* (or *big.min.js*, which is *big.js* minified).

It can be loaded via a script tag in an HTML document for the browser

```html
<script src='./relative/path/to/big.js'></script>
```

or as a CommonJS, [Node.js](http://nodejs.org) or AMD module using `require`.

```javascript
var Big = require('big.js');
```

For Node.js, the library is available from the npm registry:

```
$ npm install big.js
```


## Test

The *test* directory contains the test scripts for each Big number method.

The tests can be run with Node or a browser.

To test a single method, from a command-line shell at the *test* directory, use e.g.

```
$ node toFixed
```

To test all the methods

```
$ node every-test
```

For the browser, see *single-test.html* and *every-test.html* in the *test/browser* directory.

*big-vs-number.html* enables some of the methods of big.js to be compared with those of JavaScript's Number type.

## Performance

The *perf* directory contains two applications and a *lib* directory containing the BigDecimal libraries used by both.

*big-vs-bigdecimal.html* tests the performance of big.js against the JavaScript translations of two versions of BigDecimal, its use should be more or less self-explanatory.
(The GWT version doesn't work in IE 6.)

* GWT: java.math.BigDecimal
<https://github.com/iriscouch/bigdecimal.js>
* ICU4J: com.ibm.icu.math.BigDecimal
<https://github.com/dtrebbien/BigDecimal.js>

The BigDecimal in Node's npm registry is the GWT version. Despite its seeming popularity I have found it to have some serious bugs, see the Node script *perf/lib/bigdecimal_GWT/bugs.js* for examples of flaws in its *remainder*, *divide* and *compareTo* methods.

*bigtime.js* is a Node command-line application which tests the performance of big.js against the GWT version of
BigDecimal from the npm registry.

For example, to compare the time taken by the big.js `plus` method and the BigDecimal `add` method:

```
$ node bigtime plus 10000 40
```

This will time 10000 calls to each, using operands of up to 40 random digits and will check that the results match.

For help:

```
$ node bigtime -h
```

## Build

I.e. minify.

For Node, if uglify-js is installed globally ( `npm install uglify-js -g` ) then

```
uglifyjs -o ./big.min.js ./big.js
```

will create *big.min.js*.

The *big.min.js* already present was created with *Microsoft Ajax Minifier 5.11*.

## TypeScript

The [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) project has a TypeScript [definitions file](https://github.com/borisyankov/DefinitelyTyped/blob/master/big.js/big.js.d.ts) for big.js.

The definitions file can be added to your project via the [big.js.TypeScript.DefinitelyTyped](https://www.nuget.org/packages/big.js.TypeScript.DefinitelyTyped/0.0.1) NuGet package or via [tsd](http://definitelytyped.org/tsd/).

```
tsd query big.js --action install
```

Any questions about the TypeScript definitions file should be addressed to the DefinitelyTyped project.

## Feedback

Feedback is welcome.

Bugs/comments/questions?
Open an issue, or email

Michael
<a href="mailto:M8ch88l@gmail.com">M8ch88l@gmail.com</a>

Bitcoin donation to:
**1DppGRQSjVSMgGxuygDEHQuWEdTiVEzJYG**
Thank you

## Licence

See LICENCE.

