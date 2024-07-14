import chalk from "chalk";

// Q_no-10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. Then write one sentence 
// describing what the program does.

//Author: {Sumaira Malik};
//Date: 29-06-2024;
//This program store a person name in a veriable and give a message to that person;
console.log(chalk.blueBright('_______________________________________project 10____________________________________________'));

//store a person name,
let personName:string = "Sumaira";
//give a message to the person and print person's name with message,
console.log(chalk.cyan(`\t \n "Hello! ${personName}, would you like to learn some Python today?" \n \t`));

//another program here

//Author: {Sumaira Malik};
//Date: 29-06-2024;
//This program stores and prints the user's favorite number,


// Store your favorite number in a variable
let myFavoriteNumber:number = 4;
// Create a message that reveals your favorite number,
let  message:string = `My favorite number is: ${myFavoriteNumber},`
// Print that message
console.log(chalk.magenta(message));

