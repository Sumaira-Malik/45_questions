// Q_no-31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. 
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.



console.log("-------------------------------------Q_no-31---------------------------------------");

let userNames :string[] = ["Admin"," Afsheen","Dua","Farhana","Sumaira"];

    if(userNames.length === 0){
        console.log("we need to find some users!");
        
    }
    else{
        userNames = [];
        console.log("all users has been removed" , userNames.length);
        
    }





