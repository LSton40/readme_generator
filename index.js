// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please give your project a title.'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name you would like to be credited as author of this project.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your preferred contact email for this project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose your license',
        choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU General Public License v3.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v3.0', 'ISC License', 'Boost Software License 1.0', 'The Unlicense', 'No license']
    },
    {
        type: 'input',
        name: 'year',
        message: 'Please enter the copyright year for this project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your project.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please describe information on contributing to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please suggest some tests for your project.'
    }
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        return markdown(data);
    })
    .then((output) => {
        fs.writeFile('README.md', output, (error) => {
            error ? console.log(error) : console.log('README successfully generated!')
        });
    });
};

// Function call to initialize app
init();