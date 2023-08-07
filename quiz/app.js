import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// Classes
class User {
    constructor(name, score = 0) {
        this.name = name;
        this.score = score;
    }
    // Method to increment the score
    incrementScore() {
        this.score = (this.score || 0) + 1;
    }
}
// Console Program
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Command Line QUIZ application using Typescript and Node.js");
    await sleep();
    rainbowTitle.stop();
}
await Welcome();
const user = [];
var userInfo;
// storing users name
const userName = async () => {
    userInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter Your Name:",
        },
    ]);
    const player = new User(userInfo.name);
    user.push(player);
    if (userInfo.name) {
        console.log(`Lets play ${userInfo.name}`);
    }
};
await userName();
// Check whether ans is correct or nor
const checkCorrectAns = async () => {
    const currentPlayer = user.find((u) => u.name === userInfo.name);
    if (currentPlayer) {
        // Increment the score for the current user 
        currentPlayer.incrementScore();
        console.log(chalk.green(`Correct answer. Your score is now ${currentPlayer.score}`));
    }
    else {
        console.log("User not found.");
    }
};
// quiz questions
const app = async () => {
    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "How much is 2+2?",
            choices: [4, 6, 8, 10],
        },
    ]);
    if (action === 4) {
        await checkCorrectAns();
    }
    else {
        console.log(chalk.red("Incorrect answer."));
    }
    // Ques 2
    const { action2 } = await inquirer.prompt([
        {
            type: "list",
            name: "action2",
            message: "What is React.js?",
            choices: ['Front end library', 'Back end framework', 'CSS Framework', 'Nothing'],
        },
    ]);
    if (action2 === 'Front end library') {
        await checkCorrectAns();
    }
    else {
        console.log(chalk.red("Incorrect answer."));
    }
    // Ques 3
    const { action3 } = await inquirer.prompt([
        {
            type: "list",
            name: "action3",
            message: "What is a Constructor?",
            choices: ['Creates a Class', 'Create an Object', 'Private Method', 'Varibale Name'],
        },
    ]);
    if (action3 === 'Create an Object') {
        await checkCorrectAns();
    }
    else {
        console.log(chalk.red("Incorrect answer."));
    }
    // Ques 4
    const { action4 } = await inquirer.prompt([
        {
            type: "list",
            name: "action4",
            message: "How to you center text in CSS?",
            choices: ['text-align:center', 'display:flex', 'display:block', 'color:red'],
        },
    ]);
    if (action4 === 'text-align:center') {
        await checkCorrectAns();
    }
    else {
        console.log(chalk.red("Incorrect answer."));
    }
    const totalScore = user.reduce((total, currentPlayer) => total + (currentPlayer.score || 0), 0);
    console.log(`Total score:  ${chalk.green(totalScore)}`);
};
async function startAgain() {
    do {
        user.reduce((total, currentPlayer) => total + (currentPlayer.score = 0), 0);
        await app();
        var again = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: "Do you want to play more? Press y or n"
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
await startAgain();
