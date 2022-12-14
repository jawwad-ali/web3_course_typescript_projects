#! /usr/bin/env node
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
            message: "Select Operation. \n",
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
        console.log("Your items:", chalk.green(todos.join(", ")));
    }
    else if (operation.operator == "DeleteTodo") {
        console.log(todos);
        const removeTodo = await inquirer.prompt([
            {
                name: "deleteTodo",
                type: "input",
                message: "Enter the item you want to delete"
            },
        ]);
        const index = todos.indexOf(removeTodo.deleteTodo);
        // console.log("check here", index)
        if (index > -1) {
            todos.splice(index, 1);
        }
        console.log(`${chalk.red(removeTodo.deleteTodo)} has been removed from you list`);
    }
}
async function startAgain() {
    do {
        await TodoProgram();
        var again = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: "Do you want to add/delete more items? Press y or n"
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
    console.log("Your latest modified list: ", todos.join(", "));
}
await startAgain();
