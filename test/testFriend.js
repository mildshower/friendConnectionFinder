const friends = require('../src/friends');
const assert = require('assert');

describe('isUnconsidered()', function() {
  it('Should return function that should give true if the value is not in the given list', function() {
    const actualValue = friends.isUnconsidered([1,2,3])(4);
    assert.ok(actualValue);
  });

  it('Should return function that should give false if the value is in the given list', function() {
    const actualValue = friends.isUnconsidered([1,2,3])(2);
    assert.ok(!actualValue);
  });
});

describe('getConnection()', function() {
  const friendList = { A: ['K', 'H', 'D', 'F', 'J'],
    B: ['D'],
    C: ['E'],
    D: ['A', 'B'],
    E: ['C', 'F'],
    F: ['H', 'A', 'E', 'J'],
    G: ['I'],
    H: ['A', 'F'],
    I: ['G'],
    J: ['A', 'F'],
    K: ['A']};

  it('should give false if no connection is there', function() {
    const expectedConn = false;
    const actualConn = friends.getConnection([], friendList, 'A', 'G')['connFlag'];
    assert.strictEqual(actualConn, expectedConn);
  });

  it('should give true if connection is there', function() {
    const expectedConn = true;
    const actualConn = friends.getConnection([], friendList, 'A', 'E')['connFlag'];
    assert.strictEqual(actualConn, expectedConn);
  });
});


