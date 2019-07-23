/**
 * Testing the helpers file
 */

import { pickRandom, shuffleArray } from './helpers';

describe('pickRandom function', () => {
  test('should output either gold or silver', () => {
    expect(pickRandom()).toBeTruthy();
  });
});

describe('shuffleArray function', () => {
  test('should output the same number of items', () => {
    let testArray = ['gold', 'silver', 'half'];
    expect(shuffleArray(testArray).length).toBe(3);
  });

  test('should include the same items', () => {
    let result = shuffleArray(['gold', 'silver', 'half']);

    expect(result).toContain('gold');
    expect(result).toContain('silver');
    expect(result).toContain('half');
    expect(result).not.toContain('banana');
  });

  test('should include the same items within the array', () => {
    expect(shuffleArray(['apple', 'banana', 'mango'])).toEqual(
      expect.arrayContaining(['apple', 'banana', 'mango'])
    );
  });
});
