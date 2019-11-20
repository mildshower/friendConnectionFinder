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

const getConnection = function(
  searchedFriend,
  friendList,
  personToLookAt,
  target
) {
  const friendsOfPerson = friendList[personToLookAt];

  if (friendsOfPerson.includes(target)) {
    return { connFlag: true, path: [[personToLookAt, target]] };
  }

  const unconsideredList = friendsOfPerson.filter(
    isUnconsidered(searchedFriend)
  );
  let searchedFriendCopy = searchedFriend.concat(personToLookAt);
  let connection = false;
  let pathBranches = [];

  for (let person of unconsideredList) {
    const { connFlag, path } = getConnection(
      searchedFriendCopy,
      friendList,
      person,
      target
    );
    if (connFlag) {
      connection = true;
      pathBranches = pathBranches.concat(path);
    }
  }

  pathBranches = pathBranches.map(addPresentPerson(personToLookAt));
  return { connFlag: connection, path: pathBranches };
};

exports.isUnconsidered = isUnconsidered;
exports.getConnection = getConnection;
