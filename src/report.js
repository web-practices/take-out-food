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

  print() {
    return `
      ============= 订餐明细 =============
      ${this.getItemDetailStr()}
      -----------------------------------
      总计：${this.order.calTotalPrice()}元
      ===================================`.trim();
  }
}

module.exports = Report;
