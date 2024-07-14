import chalk from "chalk";

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

console.log(chalk.green("===========================================project 05==========================================="));

let personNameWithWhiteSpace = "\t \n Sumaira Malik \t \n";
console.log(chalk.magenta("Name with white space:",personNameWithWhiteSpace));
let strippingName = personNameWithWhiteSpace.trim();
console.log(chalk.yellow("Name without white space:",strippingName));


