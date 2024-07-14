"use strict";
// Q_no-43.Unchanged Magicians: Start with your work from Exercise 40. Call the function
//  make_great() with a copy of the array of magicians’ names. Because the original array
//   will be unchanged, return the new array and store it in a separate array. Call 
//   show_magicians() with each array to show that you have one array of the original 
//   names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("==============================================Q_no-43=====================================================");
// Define the function to show magicians' names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through .map(), it will modify the array
function make_great(magicians) {
    return magicians.map(name => ` The Great ${name}`);
}
// Define an array of magicians' names
let magicians_names = ["Harry Poter", "Peter", "Uzma"];
//making a copy of original array through .slice() function
let copy_magician_names = magicians_names.slice();
//Modify the copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magician_names);
// show both arrays original and copied
// original 
console.log("Original array\n");
show_magicians(magicians_names);
//copied 
console.log("\n copied array \n");
show_magicians(copy_great_magicians);
