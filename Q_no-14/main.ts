import chalk from "chalk";

// Q_no-14.Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list
//  that includes at least three people you’d like to invite to dinner. Then use your list to print a message to
//   each person, inviting them 
// to dinner.

console.log(chalk.cyanBright("---------------------------------PROJECT 14-----------------------------------"));

console.log(chalk.green("\n Guests those are invited today at dinner:\n"));

let guestList:string[] = ["Farhana","Kainat","Kiran"];
guestList.forEach(function(guestList:string){
    console.log(chalk.yellow(`Dear ${guestList}! you are invieted  for dinner`));
})
    


