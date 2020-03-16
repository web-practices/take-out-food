import { parseInputToMap } from '../src/tools.js';

describe('Take out food', () => {
  it('should return a map of items when parse input string', () => {
    const inputs = 'ITEM0001 x 1,ITEM0013 x 2,ITEM0022 x 1';
    const result = parseInputToMap(inputs);
    expect(result).toEqual(
      new Map([
        ['ITEM0001', 1],
        ['ITEM0013', 2],
        ['ITEM0022', 1]
      ])
    );
  });
});
