
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
// function askRiddle() {
//     guess = prompt("")
// }


            // function myFunction() {
            //     confirm("Do you want to visit?");
