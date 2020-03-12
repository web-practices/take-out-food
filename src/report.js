import BestPromotion from "./promotion/best-promotion.js";
import HalfPricePromotion from "./promotion/half-price-promotion.js";

class Report {
  constructor(order) {
    this.order = order;
    this.bestPromotion = new BestPromotion(order).getBestPromotion();
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
    if (this.bestPromotion.type == null) {
      return "";
    }
    let halfPromtionDishes = "";
    if (this.bestPromotion instanceof HalfPricePromotion) {
      halfPromtionDishes =
        "(" +
        this.bestPromotion
          .includedHalfPriceDishes()
          .map((item) => item.name)
          .join("，") +
        ")";
    }

    return `
      使用优惠:
      ${
        this.bestPromotion.type
      }${halfPromtionDishes}，省${this.bestPromotion.discount()}元
      -----------------------------------`;
  }

  print() {
    return (
      `
      ============= 订餐明细 =============
      ${this.getItemDetailStr()}
      -----------------------------------` +
      this.getPromotionStr() +
      `
      总计：${this.bestPromotion.totalPrice()}元
      ===================================`
    );
  }
}

export default Report;
