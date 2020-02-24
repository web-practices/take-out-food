class Promotion {
  constructor(order) {
    this.halfPriceDishes = ["ITEM0001", "ITEM0022"];
    this.order = order;
  }

  halfDiscount() {
    const orderIncludeHalfPriceDishes = this.order.itemsDetails.filter((item) =>
      this.halfPriceDishes.includes(item.id)
    );
    return orderIncludeHalfPriceDishes
      .map((item) => (item.price * item.count) / 2)
      .reduce((a, b) => a + b, 0);
  }

  overDiscount() {
    return this.order.originalPrice >= 30 ? 6 : 0;
  }

  discount() {
    return Math.max(this.halfDiscount(), this.overDiscount());
  }
}

module.exports = Promotion;
