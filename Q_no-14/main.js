import chalk from "chalk";
// Q_no-14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list
//  that includes at least three people you’d like to invite to dinner. Then use your list to print a message to
//   each person, inviting them 
// to dinner.
console.log(chalk.cyanBright("---------------------------------PROJECT 14-----------------------------------"));
console.log(chalk.green("\n Guests those are invited today at dinner:\n"));
let guestList = ["Farhana", "Kainat", "Kiran"];
guestList.forEach(function (guestList) {
    console.log(chalk.yellow(`${guestList}! Today you are invieted  for dinner`));
});
