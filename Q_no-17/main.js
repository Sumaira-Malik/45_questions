"use strict";
// Q_no-17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//  and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
// only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
//  name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.
let guestList = ["Afsheen", "Farhana", "Saher", "Kainat", "Shazia", "Dua"];
//new message print
console.log('I am extreamly sorry! i can invite only two people for dinner.');
// • Remove guests from your list one at a time until only two names remain in your list.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry! ${removeGuest}, i cant invite you for dinner,`);
}
;
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList} you are still invited for dinner `);
}
;
guestList.splice(0, 2);
console.log(guestList);
