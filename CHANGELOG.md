#### 6.1.1

* 03/05/21
* #169 Bugfix: `round`, `toFixed` etc. using original constructor `RM` (bug introduced in *v6.0.0*).
* #169 Correct rounding mode documentation.
* Add version number to legacy documentation.

#### 6.1.0

* 26/04/21
* #165 Add missing documentation of `toFixed` etc. rounding mode parameter.
* #150 Add static rounding modes to `Big` constructor.

#### 6.0.3

* 02/12/20
* #148 Bugfix: primitive numbers passed to constructor internally in strict mode.

#### 6.0.2

* 31/10/20
* #147 Change `toJSON` to be an alias of `toString`.

#### 6.0.1

* 30/09/20
* Correct `sqrt` initial estimate.

#### 6.0.0

* 25/09/20
* Add optional rounding mode parameter to `toExponential`, `toFixed` and `toPrecision`.
* Add a strict mode to disallow imprecise number/Big conversions when `Big.strict = true`.
* Add `toNumber` method.
* Add `prec` method to round a Big to a specified number of significant digits.
* Add version selector to API documentation.
* Change `toJSON` to return exponential format.
* Remove *big.min.js*.
* Remove `Big.version`.
* Rename *doc* folder to *docs* to use it as the GitHub publishing source.
* Add legacy API documentation to *docs*.
* Add *README* to *perf* directory.
* Refactor test suite, and add `toNumber` and `prec` tests.
* Update *README*.

#### 5.2.2

* 18/10/18
* #109 Remove opencollective dependency.

#### 5.2.1

* Delete *bower.json*.

#### 5.2.0

* 09/10/18
* #63 Allow negative argument for `round`.
* #107 `sqrt` of large number.

#### 5.1.2

* 24/05/18
* #95 Add `browser` field to *package.json*.
* Restore named export to enable `import {Big}`.

#### 5.1.1

* 22/05/18
* #95 Remove named export.

#### 5.1.0

* 22/05/18
* Amend *.mjs* exports.
* Remove extension from `main` field in *package.json*.

#### 5.0.3

* 23/10/17
* #89 Optimisation of internal `round` function.

#### 5.0.2

* 13/10/17
* Update *README.md*.

#### 5.0.1

* 13/10/17
* Correct `Big.version` number.

#### 5.0.0

* 13/10/17
* Return `-0` from `valueOf` for negative zero.
* Refactor the methods which return a string.
* Amend error messaging.
* Update API document and change its colour scheme.
* Add `Big.version`.
* Remove bitcoin address.

#### 4.0.2

* 28/09/17
* Add *big.mjs* for use with Node.js with `--experimental-modules` flag.

#### 4.0.0

* 27/09/17
* Rename `Big.E_POS` to `Big.PE`, `Big.E_NEG` to `Big.NE`.
* Refactor error messaging.
* Throw if `null` is passed to `toFixed` etc.

#### 3.2.0

* 14/09/17 Aid ES6 import.

#### 3.1.3

* Minor documentation updates.

#### 3.1.2

* README typo.

#### 3.1.1

* API documentation update, including FAQ additions.

#### 3.1.0

* Renamed and exposed `TO_EXP_NEG` and `TO_EXP_POS` as `Big.E_NEG` and `Big.E_POS`.

#### 3.0.2

* Remove *.npmignore*, use `files` field in *package.json* instead.

#### 3.0.1

* Added `sub`, `add` and `mul` aliases.
* Clean-up after lint.

#### 3.0.0

* 10/12/14 Added [multiple constructor functionality](http://mikemcl.github.io/big.js/#faq).
* No breaking changes or other additions, but a major code reorganisation, so *v3* seemed appropiate.

#### 2.5.2

* 1/11/14 Added bower.json.

#### 2.5.1

* 8/06/14 Amend README requires.

#### 2.5.0

* 26/01/14 Added `toJSON` method so serialization uses `toString`.

#### 2.4.1

* 17/10/13 Conform signed zero to IEEEE 754 (2008).

#### 2.4.0

* 19/09/13 Throw instances of `Error`.

#### 2.3.0

* 16/09/13 Added `cmp` method.

#### 2.2.0

* 11/07/13 Added 'round up' mode.

#### 2.1.0

* 26/06/13 Allow e.g. `.1` and `2.`.

#### 2.0.0

* 12/05/13 Added `abs` method and replaced `cmp` with `eq`, `gt`, `gte`, `lt`, and `lte` methods.

#### 1.0.1

* Changed default value of MAX_DP to 1E6

#### 1.0.0

* 7/11/2012 Initial release
