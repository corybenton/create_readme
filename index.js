const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is the title of the project?", "What is a short description of the project?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'name'
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description'
    }
])
.then((response) => {
    readmeText(response);
    fs.writeFile('README.md', fileInfo, (err) => {
        if (err) {
            console.error(err);
        }
    });
});

function readmeText(response) {
    fileInfo = 
`# ${response.name}

## Description

${response.description}

## Table of Contents

- Installation
- Usage
- Licence
- Contributing
- Tests
- Questions

## Installation

To run the program, goto the command line in terminal and type _node index.js_.

## Usage

## License

No license.

## Contributing

## Tests

## Questions`
}