module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return false;
    if (arr.length === 0) return true;

    let result = arr.map(elem => {
        return 1 + this.calculateDepth(elem);
    });

    result.sort((a, b) => b - a);
    return result[0];
  }
};
