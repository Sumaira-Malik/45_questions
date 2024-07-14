import chalk from "chalk";
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be personalized with 
// the person’s name.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
// name, print a message to them. The text of each message should be the same,but each message should be personalize
//  with the person’s name.
console.log(chalk.green("``````````````````````````````````project 12```````````````````````````````````````"));
//print with for loop method
console.log(chalk.cyan("Print with for loop"));
let names = ["Farhana", "Nirma", "Rukhsana", "Fatima", "Unzila"];
for (let i = 0; i < names.length; i++) {
    console.log(chalk.magenta("Hello!", names[i], "How are you?"));
}
//print with forEach method
console.log(chalk.blueBright("\t Print with forEach method \t"));
names.forEach(function (ind) {
    console.log(chalk.yellow(ind, "Hi! how are you?"));
});
