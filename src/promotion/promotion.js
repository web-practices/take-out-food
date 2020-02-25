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
}

module.exports = Promotion;
