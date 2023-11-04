"use strict";
let guestList = ["sam", "sara", "asad"];
let invite = "Hope to see you ";
for (let index = 0; index < guestList.length; index++) { //question 14
    console.log(invite + guestList[index]);
}
console.log(guestList[2] + " cannot come");
guestList.splice(2, 1, "neha");
console.log(guestList);
for (let index = 0; index < guestList.length; index++) { //question 14
    console.log(invite + guestList[index]);
}
//////////// question 16//////////
console.log("More space is available now!!! Means more guest");
guestList.splice(0, 0, "shanawz"); //at starting position
console.log(guestList);
guestList.splice(2, 0, "hira"); //at mid of array
console.log(guestList);
guestList.push("maham");
console.log(guestList); //at end of array
let message = "Welcome ";
for (let index = 0; index < guestList.length; index++) { //question 14
    console.log(message + guestList[index]);
}
////////////////// question 17/////////////////////
console.log("Only two people can come to dinner");
for (let index = 0; index < guestList.length + 2; index++) {
    let univited = guestList.pop();
    console.log(`Sorry ${univited} i can't invite you to dinner`);
}
console.log(guestList + " invited to the party");
guestList.splice(0, 2);
console.log("guest list is " + guestList);
