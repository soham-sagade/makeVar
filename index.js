/*
Takes a variable string and returns a camelCase version
*/

const toCamelCase = function (variable) {
  variable = variable.split("");
  for (let i = 0; i < variable.length; i++) {
    if (variable[i] === "_" || variable[i] === "-") {
      variable.splice(i, 1);
      variable[i] = variable[i].toUpperCase();
    }
  }
  return variable.join("");
};

module.exports = { toCamelCase };
