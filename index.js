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

console.log(toCamelCase("soham-sagade_pqr"));

module.exports = { toCamelCase };
