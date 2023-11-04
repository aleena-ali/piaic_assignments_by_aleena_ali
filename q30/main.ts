let username:string[]=["admin","student","teacher","hr"]

for (let index = 0; index < username.length; index++) {
    if (username[index]=="admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log("Hello Eric, thank you for logging in again")
    }
}


/////////////////question 31/////////////////

let isEmpty:string[]=[]

username.splice(0,4)
if (username==isEmpty ) {
    console.log("We need to find some users!")
}
