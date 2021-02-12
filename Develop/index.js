// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const layout = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of the project?"
},
{
    type: "list",
    name: "license",
    message: "What kind of license would you like?",
    choices: ["MIT", "ISC", "none"]
},
{
    type: "input",
    name: "email",
    message: "What is your Email?"
},
{
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
},
{
    type: "input",
    name: "description",
    message: "Give a description of the project: ",
},
{
    type: "input",
    name: "installation",
    message: "What commands do you need to use to install dependencies?",
},
{
    type: "input",
    name: "test",
    message: "What commands to use to test?"
},
{
    type: "input",
    name: "contribution",
    message: "What can a user contribute to the project?"
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then (response => {
        writeToFile("README.md", layout(response)
        )
    })
}

// Function call to initialize app
init();
