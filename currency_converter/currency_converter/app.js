#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// Method for comma separated Values
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// Welcome message
async function Welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Command Line Currency Converter Application using Node.js and Typescript");
    await sleep();
    rainbowTitle.stop();
}
await Welcome();
async function CurrencyConverter() {
    const currency = await inquirer.prompt([
        {
            name: "currency_name",
            type: "list",
            message: "Select your Currency. \n",
            choices: ["US Dollar", "Pounds", "Euros", "Chinese Yen"]
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Amount."
        }
    ]);
    // dollars
    if (currency.currency_name === "US Dollar") {
        console.log(`1 ${chalk.green("US Dollar")} is ${chalk.green("224 PKR")} as per Inter bank rates today`);
        const USDTOPKR = `${currency.amount * 224}`;
        console.log(`Your amount after exchange is: ${chalk.green(numberWithCommas(USDTOPKR))}`);
    }
    // pounds
    else if (currency.currency_name === "Pounds") {
        console.log(`1 ${chalk.green("Pounds")} is ${chalk.green("276 PKR")} as per Inter bank rates today`);
        const PoundsToPkr = `${currency.amount * 276}`;
        console.log(`Your amount after exchange is: ${chalk.green(numberWithCommas(PoundsToPkr))}`);
    }
    // euros
    else if (currency.currency_name === "Euros") {
        console.log(`1 ${chalk.green("Euros")} is ${chalk.green("237 PKR")} as per Inter bank rates today`);
        const EurosToPkr = `${currency.amount * 237}`;
        console.log(`Your amount after exchange is: ${chalk.green(numberWithCommas(EurosToPkr))}`);
    }
    // chinese yen
    else if (currency.currency_name === "Chinese Yen") {
        console.log(`1 ${chalk.green("Chinese Yen")} is ${chalk.green("33 PKR")} as per Inter bank rates today`);
        const Chinese_YenToPkr = `${currency.amount * 33}`;
        console.log(`Your amount after exchange is: ${chalk.green(numberWithCommas(Chinese_YenToPkr))}`);
    }
}
async function startAgain() {
    do {
        await CurrencyConverter();
        var again = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: "Do you want to exchange more? Press y or n"
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
await startAgain();
