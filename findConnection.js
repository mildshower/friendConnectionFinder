const friends = require('./src/friends.js');
const utils = require('./src/utils.js');

const findConnection = function() {
  const path = process.argv[2];
  const person1 = process.argv[3];
  const person2 = process.argv[4];
  const fileLines = utils.getFileLines(path);
  const friendList = utils.getFriendList(fileLines);
  const connection = friends.getConnection([], friendList, person1, person2);
  const message = utils.getPrintableStr(connection, 'B', 'E');
  console.log(message)
};

findConnection();
