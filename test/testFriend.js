const friends = require("../src/friends");
const assert = require("assert");

describe("isUnconsidered()", function() {
  it("Should return function that should give true if the value is not in the given list", function() {
    const actualValue = friends.isUnconsidered([1, 2, 3])(4);
    assert.ok(actualValue);
  });

  it("Should return function that should give false if the value is in the given list", function() {
    const actualValue = friends.isUnconsidered([1, 2, 3])(2);
    assert.ok(!actualValue);
  });
});

describe("addPresentPerson", function() {
  it("should give a function that adds the given person to a path", function() {
    const actualValue = friends.addPresentPerson("A")(["B", "C"]);
    const expectedValue = ["A", "B", "C"];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("getConnection()", function() {
  const friendList = {
    A: ["K", "H", "D", "F", "J", "E"],
    B: ["D"],
    C: ["E"],
    D: ["A", "B"],
    E: ["C", "F", "A"],
    F: ["H", "A", "E", "J"],
    G: ["I"],
    H: ["A", "F"],
    I: ["G"],
    J: ["A", "F"],
    K: ["A"]
  };

  it("should give false if no connection is there", function() {
    const expectedValue = { connFlag: false, path: [] };
    const { connFlag, path } = friends.getConnection([], friendList, "A", "G");
    const actualValue = { connFlag, path };
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should give only two given names if they are only direct friend(to test terminate condition)", function() {
    const expectedValue = { connFlag: true, path: [["G", "I"]] };
    const { connFlag, path } = friends.getConnection([], friendList, "G", "I");
    const actualValue = { connFlag, path };
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should give proper path when connection is there", function() {
    const expectedValue = {
      connFlag: true,
      path: [
        ["A", "E"],
        ["A", "H", "F", "E"],
        ["A", "F", "E"],
        ["A", "J", "F", "E"]
      ]
    };
    const { connFlag, path } = friends.getConnection([], friendList, "A", "E");
    const actualValue = { connFlag, path };
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
