const assert = require('assert');
const chai = require('chai')
const isPrime = require('../isPrime');

describe('isPrime function', () => {
  it('should return true for prime numbers', () => {
    assert.strictEqual(isPrime(2), true);
    assert.strictEqual(isPrime(3), true);
    assert.strictEqual(isPrime(5), true);
    assert.strictEqual(isPrime(7), true);
    assert.strictEqual(isPrime(11), true);
  });

  it('should return false for non-prime numbers', () => {
    assert.strictEqual(isPrime(1), false);
    assert.strictEqual(isPrime(4), false);
    assert.strictEqual(isPrime(6), false);
    assert.strictEqual(isPrime(8), false);
    assert.strictEqual(isPrime(9), false);
    assert.strictEqual(isPrime(10), false);
  });

  it('should return false for negative numbers and 0', () => {
    assert.strictEqual(isPrime(0), false);
    assert.strictEqual(isPrime(-1), false);
    assert.strictEqual(isPrime(-10), false);
  });

  // **********  CodiumAI Tests */

  it('should return true when given a prime number', () => {
    chai.expect(isPrime(7)).to.be.true;
  });

  // Tests that the function returns true for a large prime number
  it('should return true when given a large prime number', () => {
    chai.expect(isPrime(7919)).to.be.true;
  });

  // Tests that the function returns true for the smallest prime number (2)
  it('should return true when given the smallest prime number (2)', () => {
    chai.expect(isPrime(2)).to.be.true;
  });

  // Tests that the function returns false for 0
  it('should return false when given 0', () => {
    chai.expect(isPrime(0)).to.be.false;
  });


  // Tests that the function returns false for a negative number
  it('should return false when given a negative number', () => {
    chai.expect(isPrime(-7)).to.be.false;
  });

  // Tests that the function returns false for a large non-prime number
  it('should return false when given a large non-prime number', () => {
    chai.expect(isPrime(1000000000000000000000000000000000000000000000000000000000000000000000000000000000001)).to.be.false;
  });


});
