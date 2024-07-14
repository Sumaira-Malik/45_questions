"use strict";
// Q_no-44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered. Call the function three times,
//   using a different number of arguments each time
Object.defineProperty(exports, "__esModule", { value: true });
console.log("===========================Q_no-44===========================================");
// Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items) {
    console.log("\n Making a sandwish with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Now enjoy Sandwich");
}
// call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayou", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Cheese", "Mayou", "Butter", "chicken", "Tomato");
