This directory contains two outdated applications, *big-vs-bigdecimal.html* and *bigtime.js*, that test the performance of big.js against two JavaScript versions of Java's BigDecimal.

* [GWT: java.math.BigDecimal](https://github.com/iriscouch/bigdecimal.js)
* [ICU4J: com.ibm.icu.math.BigDecimal](https://github.com/latentflip/BigDecimal.js)

The BigDecimal in the npm registry is the GWT version. It has some bugs, see *perf/lib/bigdecimal_GWT/bugs.js* for examples of flaws in its *remainder*, *divide* and *compareTo* methods.

The use of **big-vs-bigdecimal.html** should be should be more or less self-explanatory, just open it in a browser.

**bigtime.js** is a Node.js command-line application which tests big.js against the GWT version of BigDecimal from the npm registry.

For example, to compare the time taken by the big.js `plus` method and the BigDecimal `add` method

    $ node bigtime plus 10000 40

This will time 10000 calls to each, using operands of up to 40 random digits and will check that the results match.

For help

    $ node bigtime -h
