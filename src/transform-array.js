module.exports = function transform(arr) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === undefined) {
      i++;
      continue;
    }
    switch (arr[i]) {
      case "--discard-next":
        result[result.length] = null;
        i++;
        break;
      case "--discard-prev":
        result[result.length - 1] = null;
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i > 0) {
          result.push(result[result.length - 1]);
        }
        break;
      default:
        result.push(arr[i]);
        break;
    }
    i++;
  }
  result = result.filter((el) => {
    return el !== null;
  });
  return result;
}
