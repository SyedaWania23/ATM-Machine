import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 1234;
console.log(chalk.blue("\n\t Welcome to Wania -ATM Machine \n\t"));
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter your Pin Code",
    },]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.yellow("Pin is Correct , Login Successfully "));
    //console.log(`current account balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "Select an Operation",
            choices: ["Withdraw Amount", "Check Balance"],
        },]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([{
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawl method",
                choices: ["Fast Cash", "Enter Amount"],
            },]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([{
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: ["2000", "3000", "4000", "8000", "12000"],
                },]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(chalk.red(`Your Remaining Balance is: ${myBalance}`));
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:",
                }]);
            if (amountAns.amount > myBalance) {
                console.log(chalk.red("Insufficient Balance"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw SuccessFully`);
                console.log(chalk.red(`Your Remaining Balance is ${myBalance}`));
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.yellow(`Your account balance is ${myBalance}`));
    }
}
else {
    console.log(chalk.red("Alert! Pin is Incorrect"));
}
