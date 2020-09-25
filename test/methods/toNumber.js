if (typeof test === 'undefined') require('../test');

test('toNumber', function () {
  var t;

  Big.NE = -7;
  Big.PE = 21;
  Big.strict = false;

  // Positive zero
  t = function (value) {
    test.isTrue(1 / new Big(value).toNumber() === Infinity);
  };

  t(0);
  t('0');
  t('0.0');
  t('0.000000000000');
  t('0e+0');
  t('0e-0');

  // Negative zero
  t = function (value) {
    test.isTrue(1 / new Big(value).toNumber() === -Infinity);
  };

  t(-0);
  t('-0');
  t('-0.0');
  t('-0.000000000000');
  t('-0e+0');
  t('-0e-0');

  t = function (value, expected) {
    test.areEqual(new Big(value).toNumber(), expected);
  };

  t(0, 0);
  t(-0, -0);
  t('0', 0);
  t('-0', -0);

  t(1, 1);
  t('1', 1);
  t('1.0', 1);
  t('1e+0', 1);
  t('1e-0', 1);

  t(-1, -1);
  t('-1', -1);
  t('-1.0', -1);
  t('-1e+0', -1);
  t('-1e-0', -1);


  t('123.456789876543', 123.456789876543);
  t('-123.456789876543', -123.456789876543);

  t('1.1102230246251565e-16', 1.1102230246251565e-16);
  t('-1.1102230246251565e-16', -1.1102230246251565e-16);

  t('9007199254740991', 9007199254740991);
  t('-9007199254740991', -9007199254740991);

  t('5e-324', 5e-324);
  t('1.7976931348623157e+308', 1.7976931348623157e+308);

  t('0.00999', 0.00999);
  t('123.456789', 123.456789);
  t('1.23456789876543', 1.23456789876543);

  t(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

  var n = '1.000000000000000000001';

  t(n, 1);

  Big.strict = true;

  test.isException(function () {new Big(n).toNumber()}, "new Big(n).toNumber()");

  test.isException(function () {new Big(0).toNumber()}, "new Big(0).toNumber()");
  test.isException(function () {new Big(-0).toNumber()}, "new Big(-0).toNumber()");
  test.isException(function () {new Big(1).toNumber()}, "new Big(1).toNumber()");
  test.isException(function () {new Big(-1).toNumber()}, "new Big(-1).toNumber()");
  
  t('0', 0);
  t('-0', -0);
  t('1', 1);
  t('1.0', 1);
  t('1e+0', 1);
  t('1e-0', 1);
  t('-1', -1);
  t('-1.0', -1);
  t('-1e+0', -1);
  t('-1e-0', -1);

  t('123.456789876543', 123.456789876543);
  t('-123.456789876543', -123.456789876543);

  t('1.1102230246251565e-16', 1.1102230246251565e-16);
  t('-1.1102230246251565e-16', -1.1102230246251565e-16);

  t('9007199254740991', 9007199254740991);
  t('-9007199254740991', -9007199254740991);

  t('5e-324', 5e-324);
  t('1.7976931348623157e+308', 1.7976931348623157e+308);

  t('0.00999', 0.00999);
  t('123.456789', 123.456789);
  t('1.23456789876543', 1.23456789876543);

  Big.strict = false;
});


