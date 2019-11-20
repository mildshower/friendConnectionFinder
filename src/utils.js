const fs = require("fs");

const devideInPairs = function(str) {
  return str.split(",");
};

const addToFriendList = function(friendList, friendPair) {
  const friend1 = friendPair[0].trim();
  const friend2 = friendPair[1].trim();
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

const addPathToStr = function(pathStr, path) {
  return pathStr + path.join(" --> ") + "\n";
};

const getPrintableStr = function(connection, person1, person2) {
  if (connection.connFlag) {
    let message = person1 + " and " + person2 + " are connected!";
    message = message + "\nConnection Path\n";
    const pathStr = connection.path.reduce(addPathToStr, "");
    return message + pathStr;
  } else {
    return person1 + " and " + person2 + " are not connected!";
  }
};

const getFileLines = function(path) {
  return fs.readFileSync(path, "utf8").split("\n");
};

exports.addToFriendList = addToFriendList;
exports.getFriendList = getFriendList;
exports.getPrintableStr = getPrintableStr;
exports.getFileLines = getFileLines;
exports.devideInPairs = devideInPairs;
