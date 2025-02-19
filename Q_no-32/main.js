"use strict";
// Q_no-31.Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also 
// in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print 
// a message that the person will need to enter a new username. If a username has not been used, print a 
// message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("---------------------Q_no-32------------------------------------");
// • Make a list of five or more usernames called current_users.
let currentUsers = ["Sana", "zara", "farah", "hina", "anum"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also 
// in the current_users list.
let newUsers = ["Sana", "ali", "anum", "nida", "kiran"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print 
// a message that the person will need to enter a new username. If a username has not been used, print a 
// message saying that the username is available.
for (let new_users of newUsers) {
    const lowercase_new_users = new_users.toLowerCase();
    if (currentUsers.map(user => user.toLocaleLowerCase()).includes(lowercase_new_users)) {
        console.log(`the username ${new_users} is not available`);
    }
    else {
        console.log(`the username ${new_users} is available`);
    }
}
