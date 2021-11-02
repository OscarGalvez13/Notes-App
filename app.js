const chalk = require("chalk");
const note = require("./notes");

const myNote = note("Your notes...");
console.log(myNote);

console.log(chalk.green("Success!"));
console.log(chalk.red("Warning!"));
