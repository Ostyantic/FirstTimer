'use strict';

function getName() {
    let usersName = prompt("What is your Name?")
    document.write("Hello, " + usersName + "! I hope you like Mexican food!")
}

function likeFood() {
    let usersAnswer = prompt("Do you like Mexican food?")
    if (usersAnswer == "Yes") {
        document.write("All that food looked great, right!?");
    } else if (usersAnswer == "No") {
        let userNewAnswer = prompt("Are you sure you don't like Mexican food?");
        if (userNewAnswer == "Yes") {
            document.write("That's okay! More food for me!");
        } else if (userNewAnswer == "No") {
            document.write("I'm glad you changed your mind! Probably because all that food looked great, right!?");
        } else {
            document.write("That's not the answer I was looking for...");
        }
    } else {
        document.write("That's not the answer I was looking for...");
        // let userNewAnswer = prompt("Are you sure you don't like Mexican food?");
        // if (userNewAnswer == "Yes") {
        //     document.write("That's okay! More food for me!");
        // } else if (userNewAnswer == "No") {
        //     document.write("I'm glad you changed your mind! Probably because all that food looked great, right!?");
        // } else {
        //     document.write("That's not the answer I was looking for...");
        // }
    }

}

function myRating(){
    let rating = prompt("From 1 to 5, how many tacos do you feel this page deserves?");
    for (let i = 0; i < rating; i++){
        document.write("<img class='little-taco' src='https://www.pngitem.com/pimgs/m/11-117558_pizza-clipart-kawaii-taco-cute-taco-hd-png.png' alt='cute taco' />" + (i + 1));
    }
}

function tacoTuesday(){
    let response = prompt("Which day of the week is the best day for tacos?");
    // response = response.toLowerCase();
    while (response !== 'tuesday'){
        response = prompt("Nope! Please try again.");
    }
}
