const fs = require("fs");
const inquirer = require("inquirer");
const writeReadMe = require("./utils/writeReadMe.js")

function readMePlease() {
inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is the name of your project?",
    },
    {
        name: "collaborators",
        type: "list",
        message: "Did you collaborate with anyone on this project?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        name: "contents",
        type: "list",
        message: "Do you want to include a table of contents?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        name: "description",
        type: "input",
        message: "In a few sentences, describe your project's purpose and why you built it. You'll be able to add more detail later.",
    },
    {
        name: "installation",
        type: "input",
        message: "In a few sentences, what are the steps to install or begin using your project? You'll be able to add more detail later.",
    },
    {
        name:"instructions",
        type:"input",
        message:"In a few sentences, provide basic instructions for using your project. You'll be able to add more detail later."
    },
    {
        name: "screenshot",
        type: "input",
        message: "Provide a relative path to a screenshot of your project:",
    },
    {
        name: "siteLink",
        type: "input",
        message: "Provide a link to your live site:",
    },
    {
        name: "licenseType",
        type: "list",
        message: "Do you want to include a license? See choosealicense.com for more info and options.",
        choices: [
            "Add the MIT License",
            "I need a license for a specific community.",
            "I don't want to include a license right now."
        ]
    },
    {
        name: "badgesYesNo",
        type: "list",
        message: "Do you want to include a section for badges?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        name: "contributorCocYesNo",
        type: "list",
        message: "Do you want to include the Contributor Code of Conduct?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        name: "testsYesNo",
        type: "list",
        message: "Do you want to include a section for tests?",
        choices: [
            "Yes",
            "No"
        ]
    },
]).then(userAnswers => {
    const newReadMe = writeReadMe(userAnswers);
    fs.writeFile("README.md", newReadMe, (err) => {
        if (err) throw err;
        console.log("README Template Written Successfully!");
    });
})
};
 

readMePlease();