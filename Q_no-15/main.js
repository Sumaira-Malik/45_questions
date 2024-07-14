import chalk from "chalk";
// Q_no-15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
// a new set of invitations.You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log(chalk.cyanBright("---------------------------------PROJECT 15-----------------------------------"));
///////guest list 
let guestList = ["Farhana", "Kainat", "Kiran", "Fatima", "Unzila"];
console.log(chalk.green(`Guests who were invited to the dinner party:
    ${guestList}`));
////////now kiran can’t make the dinner, so i have to invite another person 
let guestWhoCantAttandDinner = "Kiran";
console.log(chalk.red(` ${guestWhoCantAttandDinner} can’t make the dinner`));
////////let newGuest:string = "Shahzia";
guestList.splice(2, 1, 'shahzia');
/////new invitation
let newGuest = guestList.map(function (newGuest) {
    console.log(chalk.yellow(`Dear! ${newGuest}  You are cordially invited to a dinner party at my home. I look forward to your presence and the pleasure of your company.

Sincerely,
 Sumaira Malik,`));
});
