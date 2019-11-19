const generateFriendList = function() {
  return { A: ['D', 'F'],
    B: ['D'],
    C: ['E'],
    D: ['A', 'B'],
    E: ['C', 'F'],
    F: ['A', 'E'],
    G: ['H'],
    H: ['G']};
};

const isConnected = function(searchedFriend, friendList, personToLookAt, target) {
  if(searchedFriend.includes(personToLookAt)) {
    return {updatedSearched: searchedFriend, connFlag: false};
  };

  if(friendList[personToLookAt].includes(target)){
    return {updatedSearched: searchedFriend.concat(personToLookAt), connFlag: true, path: [target]};
  }

  let searchedFriendCopy = searchedFriend.slice();
  searchedFriendCopy.push(personToLookAt);
  let connection = false;
  const friendsOfPerson = friendList[personToLookAt];
  let pathHead = [];

  for (let index = 0; index < friendsOfPerson.length && !connection; index ++) {
    const {updatedSearched, connFlag, path} = isConnected(searchedFriendCopy, friendList, friendsOfPerson[index], target);
    if(connFlag) {
      pathHead = pathHead.concat(friendsOfPerson[index]).concat(path);
    }
    connection = connection || connFlag;
    searchedFriendCopy = updatedSearched;
  }

  return {updatedSearched: searchedFriendCopy, connFlag: connection, path: pathHead};
};

exports.generateFriendList = generateFriendList;
exports.isConnected = isConnected;
