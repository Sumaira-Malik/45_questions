"use strict";
// Q_no-16.More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people
//  that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
////////////////////////project_no-15////////////////////////
/////original array.
let guestList = ["Farhana", "Kainat", "Shazia",];
//print a message .
console.log("Good news, everyone! We found a bigger dinner table!");
// • Add one new guest to the beginning of your array.
guestList.unshift("Afsheen");
// • Add one new guest to the middle of your array
guestList.splice(2, 0, "Saher");
//  add one new guest to the end of your list.
guestList.push("Dua");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},  You are cordially invited to a dinner party at my home. I look forward to your presence and the pleasure of your company.

Sincerely,
 Sumaira Malik,`);
}
