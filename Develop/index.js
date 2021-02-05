// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const layout = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of the repo?"
},
{
    type: "list",
    name: "license",
    message: "what kind of license would you like?",
    choices: ["MIT", "ISC", "none"]
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
