const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    "What is the name of your project?",
    "Did you collaborate with anyone on this project?",
    "What are the steps to install or beging using your project?",
    "Provide a relative path to a screenshot.",
    "Provide a link to your live site.",
    "How can users make use of your project?"
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

// write a readme in a markdown file as a template
// function that will generate my readme template
// use inquirer to prompt users with questions
// use answers that come back from inquirer
// use answers that come back from inquirer, pass those into my generate readme function
// write file using template generated from readme function