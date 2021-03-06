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

  it('should return Fizz when input is 3', function() {
    expect(f.toFizzBuzz(3)).toEqual('Fizz');
  });

  it('should return Fizz when input is 6', function() {
    expect(f.toFizzBuzz(6)).toEqual('Fizz');
  });

  it('should return Fizz when input is 9', function() {
    expect(f.toFizzBuzz(9)).toEqual('Fizz');
  });

  it('should return Buzz when input is 5', function() {
    expect(f.toFizzBuzz(5)).toEqual('Buzz');
  });

  it('should return FizzBuzz when input is 15', function() {
    expect(f.toFizzBuzz(15)).toEqual('FizzBuzz');
  });
});
