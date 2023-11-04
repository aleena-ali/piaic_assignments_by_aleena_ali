"use strict";
let ordinal_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < ordinal_number.length; index++) {
    if (ordinal_number[index] == 1) {
        console.log(ordinal_number[index] + "st");
    }
    else if (ordinal_number[index] == 2) {
        console.log(ordinal_number[index] + "nd");
    }
    else if (ordinal_number[index] == 3) {
        console.log(ordinal_number[index] + "rd");
    }
    else {
        console.log(ordinal_number[index] + "th");
    }
}
