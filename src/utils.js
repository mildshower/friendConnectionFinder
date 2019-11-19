const fs = require('fs');

const devideInPairs = function(str) {
  return str.split(',');
};

const addToFriendList = function(friendList, friendPair) {
  const friend1 = friendPair[0];
  const friend2 = friendPair[1];
  friendList[friend1] = friendList[friend1] || [];
  friendList[friend1].push(friend2);
  friendList[friend2] = friendList[friend2] || [];
  friendList[friend2].push(friend1);
  return friendList;
};

const getFriendList = function(fileLines) {
  const friendPairs = fileLines.map(devideInPairs);
  return friendPairs.reduce(addToFriendList, {});
};

const getPrintableStr = function(connection, person1, person2) {
  if(connection.connFlag) {
    const message = person1 + ' and ' + person2 + ' are connected!';
    return message +'\nConnection Path\n' + connection.path.join(' -> ');
  } else {
    return person1 + ' and ' + person2 + ' are not connected!';
  }
};

const getFileLines = function(path) {
  return fs.readFileSync(path, 'utf8').split('\n');
};

exports.addToFriendList = addToFriendList;
exports.getFriendList = getFriendList;
exports.getPrintableStr = getPrintableStr;
exports.getFileLines = getFileLines;
exports.devideInPairs = devideInPairs;
