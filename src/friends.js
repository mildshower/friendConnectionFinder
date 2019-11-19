const isUnconsidered = function(consideredList) {
  return function(person) {
    return !consideredList.includes(person);
  };
};

const getConnection = function(searchedFriend, friendList, personToLookAt, target) {
  const friendsOfPerson = friendList[personToLookAt];

  if(friendsOfPerson.includes(target)){
    return {updatedSearched: searchedFriend.concat(personToLookAt), connFlag: true, path: [personToLookAt,target]};
  }

  const unconsideredList = friendsOfPerson.filter(isUnconsidered(searchedFriend));
  let searchedFriendCopy = searchedFriend.slice();
  searchedFriendCopy.push(personToLookAt);

  for (let index = 0; index < unconsideredList.length; index ++) {
    const {updatedSearched, connFlag, path} = getConnection(searchedFriendCopy, friendList, unconsideredList[index], target);
    searchedFriendCopy = updatedSearched;
    if(connFlag) {
      return {updatedSearched: searchedFriendCopy, connFlag: true, path: [personToLookAt].concat(path)};
    }
  }

  return {updatedSearched: searchedFriendCopy, connFlag: false, path: []};
};

exports.isUnconsidered = isUnconsidered;
exports.getConnection = getConnection;
