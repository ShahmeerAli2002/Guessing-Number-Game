#!/usr/bin/env node
import inquirer from "inquirer";

const randomNumber =Math.floor(Math.random() * 6 + 1) ;


const answer = await inquirer.prompt([
  {
    name: "guess",
    type: "number",
    message: "please guess a number between 1-6",
  },
]);

if (answer.guess === randomNumber) {
  console.log("You guessed it right");
} else {
  console.log("You guessed it wrong");
}
