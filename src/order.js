const dishes = require("./menu.js");
const BestPromotion = require("./promotion/best-promotion.js");

class Order {
  constructor(itemsMap) {
    this.itemDetails = dishes
      .filter((item) => itemsMap.has(item.id))
      .map((ele) => {
        return {
          id: ele.id,
          name: ele.name,
          price: ele.price,
          count: itemsMap.get(ele.id)
        };
      });
    this._promotion = new BestPromotion(this).getBestPromotion();
  }

  get itemsDetails() {
    return this.itemDetails;
  }

  get originalPrice() {
    return this.itemDetails
      .map((item) => item.price * item.count)
      .reduce((a, b) => a + b, 0);
  }

  get promotion() {
    return this._promotion;
  }

  calTotalPrice() {
    return this.originalPrice - this._promotion.amount;
  }
}

module.exports = Order;
