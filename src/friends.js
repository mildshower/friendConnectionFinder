const isUnconsidered = function(consideredList) {
  return function(person) {
    return !consideredList.includes(person);
  };
};

const addPresentPerson = function(presentPerson) {
  return function(path) {
    return [presentPerson].concat(path);
  };
};

const getConnection = function(searchedFriend, friendList, personToLookAt, target) {
  const friendsOfPerson = friendList[personToLookAt];
  let connection = false;
  let pathBranches = [];
  const unconsideredList = friendsOfPerson.filter(isUnconsidered(searchedFriend));
  const searchedFriendCopy = searchedFriend.concat(personToLookAt);

  if (friendsOfPerson.includes(target)) {
    connection = true;
    pathBranches = pathBranches.concat([[target]]);
  }

  for (let person of unconsideredList) {
    const { connFlag, path } = getConnection(searchedFriendCopy, friendList, person, target);
    if (connFlag && person != target) {
      connection = true;
      pathBranches = pathBranches.concat(path);
    }
  }

  pathBranches = pathBranches.map(addPresentPerson(personToLookAt));
  return { connFlag: connection, path: pathBranches };
};

exports.isUnconsidered = isUnconsidered;
exports.addPresentPerson = addPresentPerson;
exports.getConnection = getConnection;
