class Report {
  constructor(order) {
    this.order = order;
  }

  getItemDetailStr() {
    return this.order.itemDetails
      .map(
        (item) =>
          `` +
          item.name +
          " x " +
          item.count +
          " = " +
          item.count * item.price +
          "元" +
          `
      `
      )
      .join("")
      .trim();
  }

  getPromotionStr() {
    if (this.order.promotion.type == null) {
      return "";
    }
    let halfPromtionDishes = "";
    if (
      this.order.promotion.halfDishes &&
      this.order.promotion.halfDishes.length > 0
    ) {
      halfPromtionDishes =
        "(" +
        this.order.promotion.halfDishes.map((item) => item.name).join("，") +
        ")";
    }

    return `
      使用优惠:
      ${this.order.promotion.type}${halfPromtionDishes}，省${this.order.promotion.amount}元
      -----------------------------------`;
  }

  print() {
    return (
      `============= 订餐明细 =============
      ${this.getItemDetailStr()}
      -----------------------------------` +
      this.getPromotionStr() +
      `
      总计：${this.order.calTotalPrice()}元
      ===================================`
    );
  }
}

module.exports = Report;
