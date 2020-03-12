import dishes from "./menu.js";

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

  get totalPrice() {
    return this.itemDetails
      .map((item) => item.price * item.count)
      .reduce((a, b) => a + b, 0);
  }
}

export default Order;
