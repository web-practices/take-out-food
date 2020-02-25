const tools = require("./src/tools.js");
const Order = require("./src/order.js");
const Report = require("./src/report.js");
const readline = require("readline");

function bestCharge(selectedItems) {
  const itemsMap = tools.parseInputToMap(selectedItems);
  const order = new Order(itemsMap);
  const report = new Report(order);
  report.print();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("欢迎使用思沃外卖小程序！请输入您需要的菜品及数量：", (answer) => {
  bestCharge(answer);
  rl.close();
});
