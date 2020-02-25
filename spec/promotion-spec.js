const Promotion = require("../src/promotion.js");
const Order = require("../src/order.js");

describe("Take out food", function() {
  it("should discout 0￥ when input dishes", () => {
    const inputs = new Map([["ITEM0013", 4]]);
    const order = new Order(inputs);
    const promotion = new Promotion(order);
    const result = promotion.discount();
    expect(0).toEqual(result);
    expect(null).toEqual(promotion.promotionType);
  });

  it("should return discout price that half price of specific dishes when input dishes", () => {
    const inputs = new Map([
      ["ITEM0001", 1],
      ["ITEM0013", 2],
      ["ITEM0022", 1]
    ]);
    const order = new Order(inputs);
    const promotion = new Promotion(order);
    const result = promotion.discount();
    expect(13).toEqual(result);
    expect("指定菜品半价").toEqual(promotion.promotionType);
  });

  it("should return discout price that over 30￥ minus 6￥ when input dishes", () => {
    const inputs = new Map([
      ["ITEM0013", 4],
      ["ITEM0022", 1]
    ]);
    const order = new Order(inputs);
    const promotion = new Promotion(order);
    const result = promotion.discount();
    expect(6).toEqual(result);
    expect("满30减6元").toEqual(promotion.promotionType);
  });
});
