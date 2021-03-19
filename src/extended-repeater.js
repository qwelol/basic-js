module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;
  let result = "";
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result +=
        j !== additionRepeatTimes - 1 ? addition + additionSeparator : addition;
    }
    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
};
