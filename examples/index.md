# Demo

---

## Use

*In all examples below, `var`, semicolons and `toString` calls are not shown.
If a commented-out value is in quotes it means `toString` has been called on the preceding expression.*

The library exports a single function: Big, the constructor of Big number instances.
It accepts a value of type Number, String or Big number Object.

```javascript
x = new Big(123.4567)
y = Big('123456.7e-3')             // 'new' is optional
z = new Big(x)
x.eq(y) && x.eq(z) && y.eq(z)      // true
```

A Big number is immutable in the sense that it is not changed by its methods.

```javascript
0.3 - 0.1                          // 0.19999999999999998
x = new Big(0.3)
x.minus(0.1)                       // "0.2"
x                                  // "0.3"
```

The methods that return a Big number can be chained.

```javascript
x.div(y).plus(z).times(9).minus('1.234567801234567e+8').plus(976.54321).div('2598.11772')
x.sqrt().div(y).pow(3).gt(y.mod(z))    // true
```

Like JavaScript's Number type, there are `toExponential`, `toFixed` and `toPrecision` methods.

```javascript
x = new Big(255.5)
x.toExponential(5)                 // "2.55500e+2"
x.toFixed(5)                       // "255.50000"
x.toPrecision(5)                   // "255.50"
```

The maximum number of decimal places and the rounding mode used to round the results of the `div`, `sqrt` and `pow`
(with negative exponent) methods is determined by the value of the `DP` and `RM` properties of the `Big` number constructor.  

The other methods always give the exact result.  

(From *v3.0.0*, multiple Big number constructors can be created, see Change Log below.)

```javascript
Big.DP = 10
Big.RM = 1

x = new Big(2);
y = new Big(3);
z = x.div(y)                       // "0.6666666667"
z.sqrt()                           // "0.8164965809"
z.pow(-3)                          // "3.3749999995"
z.times(z)                         // "0.44444444448888888889"
z.times(z).round(10)               // "0.4444444445"
```


The value of a Big number is stored in a decimal floating point format in terms of a coefficient, exponent and sign.

```javascript
x = new Big(-123.456);
x.c                                // [1,2,3,4,5,6]    coefficient (i.e. significand)
x.e                                // 2                exponent
x.s                                // -1               sign
```

For further information see the [API](../doc/bigAPI.html) reference from the *doc* folder.


