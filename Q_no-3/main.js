import chalk from "chalk";
// Q-3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. 
console.log(chalk.red("____________________________________________PROJECT 02__________________________________________________"));
let name = "sumaira malik";
console.log(chalk.blue("\t _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _LOWER CASE _ _ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ \t"));
console.log(chalk.yellow(name.toLocaleLowerCase()));
let name2 = "Sumaira malik";
console.log(chalk.blue("\t _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _UPPER CASE _ _ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ \t"));
console.log(chalk.cyan(name2.toUpperCase()));
let name3 = "sumaira malik";
console.log(chalk.blue("\t _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _TITTLE CASE _ _ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ \t"));
console.log(chalk.green(name3.charAt(0).toUpperCase() + name3.slice(1, 14)));
