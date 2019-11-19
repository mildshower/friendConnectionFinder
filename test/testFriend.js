const friends = require('../src/friends');
const assert = require('assert');

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


