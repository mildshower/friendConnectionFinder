const friends = require('./src/friends.js');
const utils = require('./src/utils.js');

const findConnection = function() {
  const friendList = friends.generateFriendList();
  const connection = friends.getConnection([], friendList, 'B', 'E');
  utils.showConnection(connection, 'B', 'E');
};

findConnection();
