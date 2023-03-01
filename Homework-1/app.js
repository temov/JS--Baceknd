const colors = require('colors');

console.log('Doing my Homework 1')



let users = [ {role: "admin", fullname: "John Doe", username: "qwerty", password: "123qwe"}, {role: "client", fullName: "Bob Bobski", username: "asdasd", password: "zxczxc"} ];


function loggedIn(username,password){

    for( let user of users){

        if((user.username === username)&&(user.password === password)){


            console.log(colors.green("User is logged in"));
            } else {
                console.log(colors.bgYellow(colors.red("User not found")));
            }

        }

    }

    loggedIn("qwerty", "123qwe"); // prints "User is logged in" in green text
    loggedIn("asdasd", "wrongpassword");



