const friends = require('./src/friends.js');

const findConnection = function() {
  const friendList = friends.generateFriendList();
  const connection = friends.isConnected([], friendList, B, E);
  console.log();
};

findConnection();
