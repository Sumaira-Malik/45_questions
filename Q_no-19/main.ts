// Q_no-19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner. 

//q_no-14
// console.log("\n Guests those are invited today at dinner:\n");

// let guestList:string[] = ["Farhana","Kainat","Kiran"];
// guestList.forEach(function(guestList:string){
    // console.log(`Dear ${guestList}! you are invieted  for dinner`);
// })
//q_no-15
///////guest list 
let guestsList:string[] = ["Farhana","Kainat","Kiran","Fatima","Unzila"]

// console.log(`Guests who were invited to the dinner party:
// ${guestsList}`);
////////now kiran can’t make the dinner, so i have to invite another person 
// let guestWhoCantAttandDinner:string = "Kiran"
// console.log(` ${guestWhoCantAttandDinner} can’t make the dinner`);

////////let newGuest:string = "Shahzia";
guestsList.splice(2,1,'shahzia');
/////new invitation
// let newGuest = guestsList.map(function(newGuest:string){
// console.log(`Dear! ${newGuest}  You are cordially invited to a dinner party at my home. I look forward to your presence and the pleasure of your company.

// Sincerely,
// Sumaira Malik,`)});

//q_no-16
////original array.
let guest_List:string[] = ["Farhana","Kainat","Shazia",]
//print a message .
// console.log("Good news, everyone! We found a bigger dinner table!");
// • Add one new guest to the beginning of your array.
guest_List.unshift("Afsheen");
// • Add one new guest to the middle of your array
 guest_List.splice(2,0,"Saher");
//  add one new guest to the end of your list.
guest_List.push("Dua");
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]},  You are cordially invited to a dinner party at my home. I look forward to your presence and the pleasure of your company.

// Sincerely,
//  Sumaira Malik,`);
// }
//q_no-17
let GuestsList:string[] = ["Afsheen","Farhana","Saher","Kainat","Shazia","Dua"]
//sorry message to guest
// console.log('Sorry we can not find big table .');
// • Remove guests from your list one at a time until only two names remain in your list.
while(GuestsList.length > 2){
    let removeGuest = GuestsList.pop();
    // console.log(`Sorry! ${removeGuest}, i cant invite you for dinner,`);   
};
// for (let i= 0; i < GuestsList.length; i++) {
    // console.log(`Dear ${GuestsList} you are still invited for dinner `);
// };
GuestsList.splice(0,2)
// console.log(GuestsList);

console.log("The number of people you are inviting to dinner.",GuestsList.length);








