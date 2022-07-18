// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');


//Auto generate headings, with user title as Title heading
//Auto generate Table of Contents
//List of license options, generate and add badge and notice added under License
//Enter GitHub username, generates link with directions under Questions
//Enter email address, adds to Questions with directions on contacting
//Prompt user to add Description, Installation, Usage, Contributing GUidelines, Tests



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
    name: 'license',
    message: 'Please enter your license'
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

// TODO: Create a function to write README file

// function writeToFile(fileName, data) {}
function writeToFile('README.md', (error, data) => {
    error ? console.log(error) : //;
}) {}


// fs.appendFile('log.txt', 'uptown girl', (err)=>
//   err ? console.error(err) : console.log('Success!')
// );



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
