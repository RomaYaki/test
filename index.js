/**
 * @param {String} str
 * @returns {Boolean}
 */
module.exports = function isBalanced(str) {
  const opening = ["(", "[", "{"];
  const closing = [")", "]", "}"];
  const stak = [];

  for (const chari in str) {
    const ch = str[chari];
    // open
    if (opening.indexOf(ch) >= 0) {
      stak.push(ch);
    }
    // close
    if (closing.indexOf(ch) >= 0) {
      const lastElOfStak = stak[stak.length - 1];
      const indexLastOpenBr = opening.indexOf(lastElOfStak);

      if (indexLastOpenBr !== closing.indexOf(ch)) {
        console.log(`Error closing ${opening[indexLastOpenBr]} ${ch}}`);
        return false;
      }
      stak.pop();
    }
  }
  if (stak.length !== 0) {
    console.log("in balance string");
    return false;
  }
  return true;
};
