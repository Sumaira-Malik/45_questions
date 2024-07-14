import chalk from "chalk";

// Q_no-29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

console.log(chalk.green("-----------------------project_29--------------------------"));

// Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["apple","mango","orange"]
  
        if(favorite_fruits.includes("apple")){
            console.log(chalk.red("You really like apple!"));
            
        }
        if(favorite_fruits.includes("mango")){
            console.log(chalk.yellow("You really like mango!"));
            
        }
       
        if(favorite_fruits.includes("orange")){
            console.log(chalk.magenta("You really like orange!"));
            
        }
       

        if(favorite_fruits.includes("grapes")){
            console.log(chalk.green("You really like grapes!"));
            
        }
       
        if(favorite_fruits.includes("banana")){
            console.log(chalk.blue("You really like banana!"));
            
        }
       








