import chalk from "chalk";
// Q_no-11. Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.
console.log(chalk.blue("``````````````````````````````````project 11```````````````````````````````````````"));
let names = ["Farhana", "Nirma", "Rukhsana", "Fatima", "Unzila"];
//print name with for loop method
console.log(chalk.green("\t Print name with for loop method \t"));
for (let i = 0; i < names.length; i++) {
    console.log(chalk.yellow(names[i]));
}
//print name with forEach method
console.log(chalk.red("\t Print name with forEach method \t"));
names.forEach(function (index, names) {
    console.log(chalk.cyan(names, index));
});
//print name with map method
console.log(chalk.green("\t Print name with map method \t"));
names.map(function (names) {
    console.log(chalk.magenta(names));
});
//print name with for of loop method
console.log(chalk.yellow("Print name with for of loop method"));
for (const freindsName of names) {
    console.log(chalk.italic(freindsName));
}
