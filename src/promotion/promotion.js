class Promotion {
  constructor(order) {
    this._type = null;
    this.order = order;
  }

  get type() {
    return this._type;
  }

  discount() {
    return 0;
  }

  originalPrice() {
    return this.order.totalPrice;
  }

  totalPrice() {
    return this.originalPrice() - this.discount();
  }
}

module.exports = Promotion;
