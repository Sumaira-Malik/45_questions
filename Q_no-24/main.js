"use strict";
// Q_no-24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
//  try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and 
// less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
Object.defineProperty(exports, "__esModule", { value: true });
console.log("___________________________________project_24______________________________________________________");
// • Tests for equality and inequality with strings
//we can also test with console without store a veriable
console.log("Equality test:", "Sumaira Malik" === "Sumaira Malik");
console.log("Inequality test:", "Sumaira Malik" !== "Malik Sumaira");
// • Tests using the lower case function
console.log("Lower case test:", "SUMAIRA MALIK".toLowerCase() === "sumaira malik");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and 
// less than or equal to
console.log("Equality test:", 10000 === 10000); //Equality test
console.log("Inequality test:", 10 !== 9); //Inequality test
console.log("Greater than test:", 10000 > 100); // Greater than
console.log("Less than test:", 10 < 100); //Less than
console.log("Greater than & equal to test:", 10 >= 10);
console.log("Less than & equal to test:", 5 <= 10);
// • Tests using "and" and "or" operators
console.log("&& operator test:", true && true);
console.log("Or || operator:", true || false);
// • Test whether an item is in a array
const cars = ["BMW", "Honda", "Ford"];
//include methods sy hum pata lagaty hen k jo element hum console
// karwa rahy hen wo array m moujood ha ya nahi
console.log("Test items of array:", cars.includes("BMW"));
// • Test whether an item is not in a array
const car1 = ["BMW", "Honda", "Ford"];
console.log("Test items is not in array:", !car1.includes("mehran"));
