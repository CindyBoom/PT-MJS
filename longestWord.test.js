const { expect } = require('chai');
const longestWord = require('./longestWord');

describe('longestWord', () => {

  it('should return an empty string', () => {
    const result = longestWord('');
    expect(result).to.equal('');
  });

  it('should return an empty string too', () => {
    const result = longestWord(' ');
    const result2 = longestWord('                 ');
    expect(result).to.equal('');
    expect(result2).to.equal('');
  });

  it('should return "word"', () => {
    const result = longestWord('word');
    expect(result).to.equal('word');
  });

  it('should return "hello"', () => {
    const result = longestWord('hello world');
    expect(result).to.equal('hello');
  });

  it('should return "quick"', () => {
    const result = longestWord('The quick brown fox');
    expect(result).to.equal('quick');
  });

  it('should return "quick"', () => {
    const result = longestWord('The quick brown&&!! fox');
    expect(result).to.equal('quick');
  });
});
