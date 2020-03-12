import BestPromotion from "../src/promotion/best-promotion.js";
import Promotion from "../src/promotion/promotion.js";
import HalfPricePromotion from "../src/promotion/half-price-promotion.js";
import OverMinusPromotion from "../src/promotion/over-minus-promotion.js";
import Order from "../src/order.js";

describe("Take out food", function() {
  it("should discout 0￥ when input dishes", () => {
    const inputs = new Map([["ITEM0013", 4]]);
    const order = new Order(inputs);
    const bestPromotion = new BestPromotion(order).getBestPromotion();
    expect(true).toEqual(bestPromotion instanceof Promotion);
    expect(false).toEqual(bestPromotion instanceof HalfPricePromotion);
    expect(false).toEqual(bestPromotion instanceof OverMinusPromotion);
    expect(0).toEqual(bestPromotion.discount());
    expect(24).toEqual(bestPromotion.totalPrice());
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
    expect(true).toEqual(bestPromotion instanceof Promotion);
    expect(true).toEqual(bestPromotion instanceof HalfPricePromotion);
    expect(false).toEqual(bestPromotion instanceof OverMinusPromotion);
    expect(13).toEqual(bestPromotion.discount());
    expect(25).toEqual(bestPromotion.totalPrice());
    expect("指定菜品半价").toEqual(bestPromotion.type);
    expect(2).toEqual(bestPromotion.includedHalfPriceDishes().length);
  });

  it("should return discout price that over 30￥ minus 6￥ when input dishes", () => {
    const inputs = new Map([
      ["ITEM0013", 4],
      ["ITEM0022", 1]
    ]);
    const order = new Order(inputs);
    const bestPromotion = new BestPromotion(order).getBestPromotion();
    expect(true).toEqual(bestPromotion instanceof Promotion);
    expect(false).toEqual(bestPromotion instanceof HalfPricePromotion);
    expect(true).toEqual(bestPromotion instanceof OverMinusPromotion);
    expect(6).toEqual(bestPromotion.discount());
    expect(26).toEqual(bestPromotion.totalPrice());
    expect("满30减6元").toEqual(bestPromotion.type);
  });
});
