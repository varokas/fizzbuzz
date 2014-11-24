describe('sample', function() {
  it('should be able to add', function() {
    expect(2 + 2).toEqual(4);
  });
});

var f = require('../www/js/fizzbuzz.js');

describe('fizzbuzz', function() {
  it('should return 1 when input is 1', function() {
    expect(f.toFizzBuzz(1)).toEqual(1);
  });
});
