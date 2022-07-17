// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
name: 'title',
message: 'Please enter your title'
},
{
    name: 'description',
    message: 'Please describe your project'
},
{
    name: 'table_contents',
    message: ''  
},
{
    name: 'installation',
    message: 'Please describe the installation for your project'
},
{
    name: 'usage',
    message: 'Please describe how to use your project'
},
{
    type: 'list'
    name: 'license',
    message: 'Please choose your license'
    choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU General Public License v3.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v3.0', 'ISC License', 'Boost Software License 1.0', 'The Unlicense', 'No license']
},
{
    name: 'contributing',
    message: 'Please describe information on contributions to your project'
},
{
    name: 'tests',
    message: 'Please suggest some tests for your project'
},
{
    name: 'questions',
    message: 'Please enter your contact information to answer questions'
}];


// inquirer.prompt(questions)
// .then((data) => {

// })
// .then((data) => {
//     markdown.generateMarkdown(data);
// })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function writeToFile('README.md', (error, data) => {
    error ? console.log(error) : //;
}) {}


// fs.readFile('data.csv', 'utf8', (error, data) =>
// error ? console.error(error) : console.log(data)
// );

// fs.writeFile('log.txt', process.argv[2], (err) =>
// err ? console.error(err) : console.log('Success!')
// );

// fs.writeFile('log.txt', 'new line of text', (err) =>
// err ? console.error(err) : console.log('Success!')
// );

// fs.appendFile('log.txt', 'uptown girl', (err)=>
//   err ? console.error(err) : console.log('Success!')
// );



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        markdown.generateMarkdown(data);
    })
    .then(writeToFile(data))
}

// Function call to initialize app
init();
