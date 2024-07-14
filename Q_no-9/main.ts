import chalk from "chalk";

// Favorite Number: Store your favorite number in a variable. Then, using that variable, 
// create a message that reveals your favorite number. Print that message.
console.log(chalk.blueBright('_______________________________________project 09____________________________________________'));


let myFavoriteNumber:number = 4;
let  message:string = `My favorite number is: ${myFavoriteNumber},`
console.log(chalk.magenta(message));

