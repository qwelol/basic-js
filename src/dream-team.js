module.exports = function createDreamTeam(members) {
  let result = [];
  if (members && members.length) {
    for (let i = 0; i < members.length; i++) {
      const element = members[i];
      if (typeof element === "string") {
        result.push(element.trim()[0].toUpperCase());
      }
    }
    result.sort();
  } else {
    return false;
  }
  return result.join("");
};
