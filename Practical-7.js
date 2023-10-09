const Calculator = require("./export(pr-7)");

const cal = new Calculator();

const Add = cal.add(15, 25);
console.log("15 + 25 =", Add);

const Subtract = cal.subtract(11, 5);
console.log("11 - 5 =", Subtract);

const Multiply = cal.multiply(9, 3);
console.log("9 * 3 =", Multiply);

const Divide = cal.divide(19, 5);
console.log("19 / 5 =", Divide);
