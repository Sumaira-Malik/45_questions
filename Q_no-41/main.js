"use strict";
// Q_no-41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("--------------------------------------Q_no-41------------------------------------------");
//Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Define an array containing magicians name
let magicians_names = ["Harry Poter", "Rukhsana", "Uzma"];
// call the function to print each magician name
show_magicians(magicians_names);
