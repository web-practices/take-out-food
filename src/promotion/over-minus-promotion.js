import Promotion from "./promotion.js";

class OverMinusPromotion extends Promotion {
  constructor(order) {
    super(order);
    this._type = "满30减6元";
  }

  get type() {
    return this._type;
  }

  discount() {
    // Need to be implemented
  }
}

export default OverMinusPromotion;
