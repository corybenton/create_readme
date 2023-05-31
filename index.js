const fs = require('fs');
const inquirer = require('inquirer');

const questions = ["What is the title of the project?", "What is a short description of the project?",
    "Who is the author of the project?", "What is your email address?", "What is your github name?", 
    "How is the project to be used?", "What are the installation guidelines?", "What license is on your project?",
    "Detail any tests performed."];

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
    },
    {
        type: 'input',
        message: questions[2],
        name: 'author'
    },
    {
        type: 'input',
        message: questions[3],
        name: 'email'
    },
    {
        type: 'input',
        message: questions[4],
        name: 'github'
    },
    {
        type: 'input',
        message: questions[5],
        name: 'usage'
    },
    {
        type: 'input',
        message: questions[6],
        name: 'installation'
    },
    {
        type: 'list',
        message: questions[7],
        name: 'license',
        choices: ['MIT', 'GPLv3', 'GPL', 'CC-0', 'Unlicense']
    },
    {
        type: 'input',
        message: questions[8],
        name: 'tests'
    },
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

- [Badges](#badges)
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

##Badges

[![${response.license} license]('https://img.shields.io/badge/License-${response.license}-blue.svg')]

## Installation

${response.installation}

## Usage

${response.usage}

## License

This program is using the ${response.license} license.

## Contributing

To contribute anything, please contact ${response.author} at ${response.email}.

## Tests

${response.tests}

## Questions

If you have any questions, please contact ${response.author} at ${response.email}
or at my [github]('https://github.com/${response.github})'.`
}