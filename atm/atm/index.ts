import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))

var email = "demo@gmail.com"
var password = "demo123@"

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
            message: "Enter Email. \n",
        }
    ])
    const password = await inquirer.prompt([
        {
            name: "password",
            type: "password",
            message: "Enter Password. \n",
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
    console.log("Welcome to our ATM")
    // const operation = await inquirer.prompt([
    //     {
    //         name: "operator",
    //         type: "list",
    //         message: "Select Operation. \n",
    //         choices: ["AddTodo", "DeleteTodo"]
    //     }
    // ])
}

// await ATM()