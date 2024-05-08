console.log("guess a number between 1 to 10");
//now variable create
let a = Math.floor(Math.random() * 10);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "Enter your guess number you want between 1 to 8:" });
    //provide code
    let ans = input.guess;
    if (a == ans) {
        console.log("Congraculation your guess number is correcrt");
        break;
    }
    else {
        console.log("sorry your guess number wrong try again");
    }
}
