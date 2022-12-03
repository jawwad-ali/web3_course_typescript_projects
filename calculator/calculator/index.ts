#! /usr/bin/env node
import inquirer from "inquirer"; 
import chalk from "chalk"; 
import chalkAnimation from "chalk-animation"

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

// Welcome message
async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Command Line Calculator using Node.js and Typescript")
    await sleep()
    rainbowTitle.stop()

    console.log(`
    _____________________
    |     Ali Jawwad.     |
    |  _________________  |
    | | Calculator   0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `)

}
await Welcome()

// Taking User Input
async function askQuestions() {
    const answers = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter First Number"
        },
        {
            name: "num2",
            type: "number",
            message: "Enter Second Number"
        },
        {
            name: "operator",
            type: "list",
            message: "Select which option you want to Perform. \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        }
    ])
    // console.log(answers.num1, answers.num2, answers.operator)

    if (answers.operator == "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`))
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`))
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`))
    }
    else if (answers.operator == "Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`))
    }

}

// await askQuestions()

async function startAgain() {
    do {
        await askQuestions()
        var again = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: "Do you want to calculate more? Press y or n"
            }
        ])
    }
    while (
        again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES"
    )
}

await startAgain()  