const Promotion = require("./promotion.js");

class OverMinusPromotion extends Promotion {
  constructor(order) {
    super(order);
    this._type = "满30减6元";
  }

  get type() {
    return this._type;
  }

  discount() {
    return this.order.originalPrice() >= 30 ? 6 : 0;
  }
}

module.exports = OverMinusPromotion;
