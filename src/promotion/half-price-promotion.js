import Promotion from './promotion.js';

class HalfPricePromotion extends Promotion {
  constructor(order) {
    super(order);
    this._type = '指定菜品半价';
    this.halfPriceDishes = ['ITEM0001', 'ITEM0022'];
  }

  get type() {
    return this._type;
  }

  includedHalfPriceDishes() {
    // need to be completed
  }

  discount() {
    // need to be completed
  }
}

export default HalfPricePromotion;
