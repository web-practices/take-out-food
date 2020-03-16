import Promotion from './promotion.js';
import HalfPricePromotion from './half-price-promotion.js';
import OverMinusPromotion from './over-minus-promotion.js';

class BestPromotion {
  constructor(order) {
    this.promotion = new Promotion(order);
    this.halfPricePromotion = new HalfPricePromotion(order);
    this.overMinusPromotion = new OverMinusPromotion(order);
  }

  getBestPromotion() {
    const halfDiscount = this.halfPricePromotion.discount();
    const overDiscount = this.overMinusPromotion.discount();
    if (halfDiscount == 0 && overDiscount == 0) {
      return this.promotion;
    }

    return halfDiscount >= overDiscount
      ? this.halfPricePromotion
      : this.overMinusPromotion;
  }
}

export default BestPromotion;
