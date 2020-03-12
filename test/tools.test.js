const tools = require("../src/tools.js");

describe("Take out food", function() {
  it("should return a map of items when parse input string", () => {
    let inputs = "ITEM0001 x 1,ITEM0013 x 2,ITEM0022 x 1";
    let result = tools.parseInputToMap(inputs);
    expect(result).toEqual(
      new Map([
        ["ITEM0001", 1],
        ["ITEM0013", 2],
        ["ITEM0022", 1]
      ])
    );
  });
});
