const dishes = require("./menu.js");

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
  }

  get itemsDetails() {
    return this.itemDetails;
  }

  calTotalPrice() {
    // Need to be implement
  }
}

module.exports = Order;
