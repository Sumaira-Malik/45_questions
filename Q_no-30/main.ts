import chalk from "chalk";

// Q_no-30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


console.log(chalk.blue("----------------------------------project_30-----------------------------------------"));

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

let userNames :string[] = ["Admin"," Afsheen","Dua","Farhana","Sumaira"];

    userNames.forEach(username => {
        if(username === "Admin"){
            console.log(chalk.green("Hello", username, "would you like to see a status report?"));
            
        }
        else {
            console.log(chalk.yellow("Hello", username, " thank you for logging in again."));

            
        }
        
    });












