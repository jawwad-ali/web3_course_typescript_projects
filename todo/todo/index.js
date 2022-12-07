import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let todos = ["breakfast", "exercise", "coding"];
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Command Line Todo List Application using Typescript and Node.js");
    await sleep();
    rainbowTitle.stop();
}
await Welcome();
async function TodoProgram() {
    const operation = await inquirer.prompt([
        {
            name: "operator",
            type: "list",
            message: "Select which option you want to Perform. \n",
            choices: ["AddTodo", "DeleteTodo"]
        }
    ]);
    if (operation.operator == "AddTodo") {
        const newTodo = await inquirer.prompt([
            {
                name: "addTodo",
                type: "input",
                message: "Add New todo"
            },
        ]);
        todos.push(newTodo.addTodo);
        console.log(chalk.green(todos.join(", ")));
    }
}
async function startAgain() {
    do {
        await TodoProgram();
        var again = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: "Do you want to add more items? Press y or n"
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
await startAgain();
