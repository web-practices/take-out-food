class Promotion {
  constructor(order) {
    this.halfPriceDishes = ["ITEM0001", "ITEM0022"];
    this.order = order;
    this._promotionType = null;
  }

  get promotionType() {
    return this._promotionType;
  }

  set promotionType(type) {
    this._promotionType = type;
  }

  discount() {
    // Need to be implement
  }
}

module.exports = Promotion;
