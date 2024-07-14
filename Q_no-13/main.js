import chalk from "chalk";
// Q_no-13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”
console.log(chalk.green("\t*********************************project 13*********************************\t"));
console.log(chalk.yellow("\t \n __________________________VEHICALES LIST_____________________________\t \n"));
let vehicales = ["Honda motorcycle", "Toyota car", "Suzuki motorcycle", "BMW car"];
vehicales.map(function (vehicales) {
    console.log(chalk.cyanBright(`I would like to own a "${vehicales}".`));
});
