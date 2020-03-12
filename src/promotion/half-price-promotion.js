import Promotion from "./promotion.js";

class HalfPricePromotion extends Promotion {
  constructor(order) {
    super(order);
    this._type = "指定菜品半价";
    this.halfPriceDishes = ["ITEM0001", "ITEM0022"];
  }

  get type() {
    return this._type;
  }

  includedHalfPriceDishes() {
    return this.order.itemDetails.filter((item) =>
      this.halfPriceDishes.includes(item.id)
    );
  }

  discount() {
    return this.includedHalfPriceDishes()
      .map((item) => (item.price * item.count) / 2)
      .reduce((a, b) => a + b, 0);
  }
}

export default HalfPricePromotion;
