function parseInputToMap(selectedItems) {
  // need to be implement
  return new Map(
    selectedItems.map((item) => {
      let matchs = item.split(" x ");
      let count = parseInt(matchs[1]);
      return [matchs[0], count];
    })
  );
}

module.exports = { parseInputToMap };
