if (typeof test === 'undefined') require('../test');

test('neg', function () {

  function t(expected, value){
    test.areEqual(expected, new Big(value).neg().toString());
  }
  
  Big.NE = -7;
  Big.PE = 21;

  test.isNegativeZero(new Big('0').neg());
  test.isNegativeZero(new Big('-0').neg().neg());

  t('0', '0');
  t('-1', '1');
  t('-11.121', '11.121');
  t('0.023842', '-0.023842');
  t('1.19', '-1.19');
  t('-3838.2', '3838.2');
  t('-127', '127');
  t('4.23073', '-4.23073');
  t('2.5469', '-2.5469');
  t('-2.0685908346593874980567875e+25', '20685908346593874980567875');
});
