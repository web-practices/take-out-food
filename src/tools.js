function parseInputToMap(selectedItems) {
  return new Map(
    selectedItems.split(",").map((item) => {
      let matchs = item.split(" x ");
      let count = parseInt(matchs[1]);
      return [matchs[0], count];
    })
  );
}

module.exports = { parseInputToMap };
