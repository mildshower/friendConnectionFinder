const utils = require("../src/utils.js");
const assert = require("assert");

describe("devideInPairs()", function() {
  it("should give array containing empty str for empty str", function() {
    const actualValue = utils.devideInPairs("");
    const expectedValue = [""];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it('should split str by "," and return in array', function() {
    const actualValue = utils.devideInPairs("Ram,Shyam,Hari");
    const expectedValue = ["Ram", "Shyam", "Hari"];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("addToFriendList()", function() {
  it("should insert new entries to empty friendList", function() {
    const actualValue = utils.addToFriendList({}, ["Ram", "Shyam"]);
    const expectedValue = { Ram: ["Shyam"], Shyam: ["Ram"] };
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should insert entries to non empty friendList", function() {
    const actualValue = utils.addToFriendList({ Ram: ["Shyam"], Shyam: ["Ram"] }, ["Ram", "Sagar"]);
    const expectedValue = {
      Ram: ["Shyam", "Sagar"],
      Shyam: ["Ram"],
      Sagar: ["Ram"]
    };
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("getFriendList()", function() {
  it("Should give empty obj for empty array as input", function() {
    const actualValue = utils.getFriendList([]);
    const expectedValue = {};
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("Should give ful-fledged friendList when friend pairs are given in string", function() {
    const actualValue = utils.getFriendList(["Ram,Shyam", "Ram,Sagar"]);
    const expectedValue = {
      Ram: ["Shyam", "Sagar"],
      Shyam: ["Ram"],
      Sagar: ["Ram"]
    };
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("getPrintableStr()", function() {
  it("Should give no connection message if connFlag is false", function() {
    const actualValue = utils.getPrintableStr({ connFlag: false, path: [] }, "A", "B");
    const expectedValue = "A and B are not connected!";
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("Should give positive message with path", function() {
    const actualValue = utils.getPrintableStr(
      {
        connFlag: true,
        path: [
          ["A", "C", "B"],
          ["A", "D", "B"]
        ]
      },
      "A",
      "B"
    );
    const expectedValue = "A and B are connected!\nConnection Path\nA --> C --> B\nA --> D --> B\n";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("getFileLines()", function() {
  it("Should return all lines of testData.txt file in array", function() {
    const actualValue = utils.getFileLines("./test/testData.txt");
    const expectedValue = ["A,B", "B,C"];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
