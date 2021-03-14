let chain = [];
const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position > 0 && typeof(position) === "number" && chain[position]!== undefined) {
      chain.splice(position-1, 1);
    } else {
      chain= [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    chain = chain.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    for (let i = 0; i < chain.length; i++) {
      result += "( "+chain[i] + " )";
      if (i !== chain.length - 1) {
        result += "~~";
      }
    }
    chain = [];
    return result;
  },
};

module.exports = chainMaker;
