const isUnconsidered = function(consideredList) {
  return function(person) {
    return !consideredList.includes(person);
  };
};

const getConnection = function(searchedFriend, friendList, personToLookAt, target) {
  const friendsOfPerson = friendList[personToLookAt];

  if(friendsOfPerson.includes(target)){
    return {connFlag: true, path: [personToLookAt,target]};
  }

  const unconsideredList = friendsOfPerson.filter(isUnconsidered(searchedFriend));
  let searchedFriendCopy = searchedFriend.concat(personToLookAt);

  for (let person of unconsideredList) {
    const {connFlag, path} = getConnection(searchedFriendCopy, friendList, person, target);
    if(connFlag) {
      return {connFlag: true, path: [personToLookAt].concat(path)};
    }
  }

  return {connFlag: false, path: []};
};

exports.isUnconsidered = isUnconsidered;
exports.getConnection = getConnection;
