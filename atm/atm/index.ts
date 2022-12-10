#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

const email = "demo@gmail.com" 
const password = "demo123@"
console.log(`Enter ${email} from email, and ${password} for password`)

var InitialBalance = 5000

async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Command Line ATM application using Typescript and Node.js")
    await sleep()
    rainbowTitle.stop()
}

await Welcome()

async function Login() {

    const email = await inquirer.prompt([
        {
            name: "email",
            type: "string",
            message: "Enter Email.",
        }
    ])
    const password = await inquirer.prompt([
        {
            name: "password",
            type: "password",
            message: "Enter Password.",
        }
    ])

    if (email.email === "demo@gmail.com" && password.password === "demo123@") {
        await ATM()
    }
    else {
        console.log("invalid credentials")
    }
}
await Login()

async function ATM() {
    const operation = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: "Select Operation. \n",
            choices: ["Withdrawal", "Deposit", "Transfer"]
        }
    ])

    if (operation.operator == "Withdrawal") {
        const action = await inquirer.prompt([
            {
                name: "withdrawal",
                type: "number",
                message: "Withdrawal Amount.",
            }
        ])

        if (action.withdrawal > InitialBalance) {
            console.log("Insufficient Balance")
        }
        else {
            var afterOperation = InitialBalance -= action.withdrawal
            console.log("Your current balance after Withdrawal is: ", afterOperation)

            // Updating the initial balance after withdrawal
            afterOperation = - InitialBalance
            console.log("after withdrawal", InitialBalance)
        }
    }

    else if (operation.operator == "Deposit") {
        const action = await inquirer.prompt([
            {
                name: "deposit",
                type: "number",
                message: "Deposit Amount.",
            }
        ])

        const afterOperation = InitialBalance + action.deposit
        console.log("Your current balance after Deposit is: ", afterOperation)

        // Updating the initial balance after deposit
        InitialBalance = + afterOperation
        console.log("after dep", InitialBalance)
    }

    // Transfer
    else if (operation.operator == "Transfer") {
        console.log("Your Initial Balance is: ", InitialBalance)
        const accNumber = await inquirer.prompt([
            {
                name: "account",
                type: "string",
                message: "Enter the 6 digit Account Number.",
            }
        ])

        if ((accNumber.account).length !== 6) {
            console.log(chalk.red("Enter the 6 digit account number"))
        }

        else {
            const action = await inquirer.prompt([
                {
                    name: "transfer",
                    type: "number",
                    message: "Transfer Amount.",
                }
            ])

            if (action.transfer > InitialBalance) {
                console.log(chalk.red(`Cannot trasnfer amount more than Initial Balance`))
            }
            else {
                console.log(`The Amount of ${chalk.green(action.transfer)} has been deposited to ${chalk.green(accNumber.account)}`)

                var afterOperation = InitialBalance -= action.transfer
                console.log("Your current balance after Transfer is: ", afterOperation)
            }
        }
    }
}

// await ATM()
async function startAgain() {
    do {
        await ATM()
        var again = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: "Do you want to Perform actions again? Press y or n"
            }
        ])
    }
    while (
        again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES"
    )
}

await startAgain()  