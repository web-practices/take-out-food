import Report from '../src/report.js';
import Order from '../src/order.js';

describe('Take out food', () => {
  it('should generate order string that half price of specific dishes', function() {
    const inputs = new Map([
      ['ITEM0001', 1],
      ['ITEM0013', 2],
      ['ITEM0022', 1]
    ]);
    const order = new Order(inputs);
    const report = new Report(order);
    const result = report.print();
    const expected = `
      ============= 订餐明细 =============
      黄焖鸡 x 1 = 18元
      肉夹馍 x 2 = 12元
      凉皮 x 1 = 8元
      -----------------------------------
      使用优惠:
      指定菜品半价(黄焖鸡，凉皮)，省13元
      -----------------------------------
      总计：25元
      ===================================`;
    expect(expected).toEqual(result);
  });
  it('should generate order string is that discount 6￥ over 30￥', () => {
    const inputs = new Map([
      ['ITEM0013', 4],
      ['ITEM0022', 1]
    ]);
    const order = new Order(inputs);
    const report = new Report(order);
    const result = report.print();
    const expected = `
      ============= 订餐明细 =============
      肉夹馍 x 4 = 24元
      凉皮 x 1 = 8元
      -----------------------------------
      使用优惠:
      满30减6元，省6元
      -----------------------------------
      总计：26元
      ===================================`;
    expect(expected).toEqual(result);
  });
  it('should generate order string when no promotion can be used', () => {
    const inputs = new Map([['ITEM0013', 4]]);
    const order = new Order(inputs);
    const report = new Report(order);
    const result = report.print();
    const expected = `
      ============= 订餐明细 =============
      肉夹馍 x 4 = 24元
      -----------------------------------
      总计：24元
      ===================================`;
    expect(expected).toEqual(result);
  });
});
