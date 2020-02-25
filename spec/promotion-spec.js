const BestPromotion = require("../src/promotion/best-promotion.js");
const Order = require("../src/order.js");

describe("Take out food", function() {
  it("should discout 0￥ when input dishes", () => {
    const inputs = new Map([["ITEM0013", 4]]);
    const order = new Order(inputs);
    const bestPromotion = new BestPromotion(order).getBestPromotion();
    expect(0).toEqual(bestPromotion.amount);
    expect(null).toEqual(bestPromotion.type);
  });

  it("should return discout price that half price of specific dishes when input dishes", () => {
    const inputs = new Map([
      ["ITEM0001", 1],
      ["ITEM0013", 2],
      ["ITEM0022", 1]
    ]);
    const order = new Order(inputs);
    const bestPromotion = new BestPromotion(order).getBestPromotion();
    expect(13).toEqual(bestPromotion.amount);
    expect("指定菜品半价").toEqual(bestPromotion.type);
    expect(2).toEqual(bestPromotion.halfDishes);
  });

  it("should return discout price that over 30￥ minus 6￥ when input dishes", () => {
    const inputs = new Map([
      ["ITEM0013", 4],
      ["ITEM0022", 1]
    ]);
    const order = new Order(inputs);
    const bestPromotion = new BestPromotion(order).getBestPromotion();
    expect(6).toEqual(bestPromotion.amount);
    expect("满30减6元").toEqual(bestPromotion.type);
  });
});
