module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    if (Array.isArray(arr)) {
      if (arr.length) {
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
          res = Math.max(res, this.calculateDepth(arr[i], depth + 1));
        }
        return res;
      } else {
        return depth+1;
      }
    }
    return depth;
  }
}