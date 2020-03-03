const expect = require('chai').expect;
const factorial = require('./factorial');

describe('factorial', () => {


  it('should return 0', () => {
    const result = factorial(0);
    expect(result).to.equal(1);
  });

  it('should return 24', () => {
    const result = factorial(4);
    expect(result).to.equal(24);
  });

  it('should return 0 for negative numbers', () => {
    const result = factorial(-1);
    expect(result).to.equal(0);
  });
});
