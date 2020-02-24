const Order = require("../src/order.js");

describe("Take out food", function() {
  it("should return a array of items when input specific dishes", () => {
    const inputs = new Map([
      ["ITEM0001", 1],
      ["ITEM0013", 2],
      ["ITEM0022", 1]
    ]);
    const orderDetails = [
      { id: "ITEM0001", name: "黄焖鸡", price: 18.0, count: 1 },
      { id: "ITEM0013", name: "肉夹馍", price: 6.0, count: 2 },
      { id: "ITEM0022", name: "凉皮", price: 8.0, count: 1 }
    ];
    const order = new Order(inputs);
    const result = order.itemDetails;
    expect(orderDetails).toEqual(result);
  });

  it("should return normal price when input dishes", () => {
    const inputs = new Map([["ITEM0013", 4]]);
    const order = new Order(inputs);
    const originalPrice = order.originalPrice;
    expect(24).toEqual(originalPrice);
    const result = order.calTotalPrice();
    expect(24).toEqual(result);
  });

  it("should return discout price that half price of specific dishes when input dishes", () => {
    const inputs = new Map([
      ["ITEM0001", 1],
      ["ITEM0013", 2],
      ["ITEM0022", 1]
    ]);
    const order = new Order(inputs);
    const originalPrice = order.originalPrice;
    expect(38).toEqual(originalPrice);
    const result = order.calTotalPrice();
    expect(25).toEqual(result);
  });

  it("should return discout price that over 30￥ minus 6￥ when input dishes", () => {
    const inputs = new Map([
      ["ITEM0013", 4],
      ["ITEM0022", 1]
    ]);
    const order = new Order(inputs);
    const originalPrice = order.originalPrice;
    expect(32).toEqual(originalPrice);
    const result = order.calTotalPrice();
    expect(26).toEqual(result);
  });
});
