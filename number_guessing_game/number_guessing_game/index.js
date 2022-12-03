#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Guess the number between 1 to 10");
    await sleep();
    rainbowTitle.stop();
}
await Welcome();
async function NumberGuessingGame() {
    console.log(`Start, you have 3 chances`);
    let randomNumber = Math.floor(Math.random() * 10);
    // User has 3 chances to guess the Number
    for (var i = 1; i <= 3; i++) {
        var GuessedNumber = await inquirer.prompt([{
                name: "guess",
                type: "number",
                message: "Guess Number"
            }]);
        if (GuessedNumber.guess === randomNumber) {
            console.log(chalk.green("Correct guess"));
            break;
        }
        else {
            console.log(chalk.red(`Try again you have ${3 - i} chances remaining`));
        }
    }
}
// Re-starting game function 
async function startAgain() {
    do {
        await NumberGuessingGame();
        var again = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: "Do you want to play again? Press y or n"
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
await startAgain();
