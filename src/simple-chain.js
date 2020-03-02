const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let chainElement = `( ${value} )`;
    this.chain.push(chainElement);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.getLength()) {
      this.chain = [];
      throw new Error('You try to remowe wrong link!');
    }
    if (position === 1) {
      this.chain.shift();
    } else if (position === this.getLength()) {
      this.chain.pop();
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
