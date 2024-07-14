"use strict";
// Q_no-26.Alien Colors #2: Choose a color for an aliethat the player just earned 10 points.n as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement 
// • Write one version of this program that runs the if block and another that runs the else block.
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = "green";
if (alien_color == "green") {
    console.log(" The player just earned 5 points.");
}
else {
    console.log("The player just earned 10 points.");
} // condition true
alien_color = "yellow";
if (alien_color == "green") {
    console.log(" The player just earned 5 points.");
}
else {
    console.log("The player just earned 10 points.");
} //condition false
