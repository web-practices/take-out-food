const Promotion = require("./promotion.js");
const HalfPricePromotion = require("./half-price-promotion.js");
const OverMinusPromotion = require("./over-minus-promotion.js");

class BestPromotion {
  constructor(order) {
    this.promotion = new Promotion(order);
    this.halfPricePromotion = new HalfPricePromotion(order);
    this.overMinusPromotion = new OverMinusPromotion(order);
  }

  getBestPromotion() {
    const halfDiscount = this.halfPricePromotion.discount();
    const overDiscount = this.overMinusPromotion.discount();
    if (halfDiscount > 0 && overDiscount > 0) {
      if (halfDiscount >= overDiscount) {
        return {
          type: this.halfPricePromotion.type,
          amount: halfDiscount,
          halfDishes: this.halfPricePromotion.includedHalfPriceDishes()
        };
      } else {
        return {
          type: this.overMinusPromotion.type,
          amount: overDiscount
        };
      }
    }

    return {
      type: this.promotion.type,
      amount: this.promotion.discount()
    };
  }
}

module.exports = BestPromotion;
