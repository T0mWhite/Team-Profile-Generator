// Including packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateMarkdown");
const generateEmployee = require("./utils/generateMarkdown");


let employeeArray = [];



// Create a starting question to prompt the user if they would like to use the application
const generateReadme =   {
  type: "list",
  name: "beginGeneration",
  message: "Would you like to generate a README.md for a project?",
  choices: [
    new inquirer.Separator(" = Please choose: = "),
    {
      name: "Yes",
    },
    {
      name: "No",
    },
  ],
};

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "createdYear",
    message: "What year was the software created?",
  },
  {
    type: "input",
    name: "creatorName",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of this project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for this project:",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install this application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How does the user interact with this application?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license is this application covered under?",
    choices: [
      new inquirer.Separator(" = Licenses = "),
      {
        name: "Coffeeware",
      },
      {
        name: "MIT",
      },
      {
        name: "Apache",
      },
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "How does a user contribute to this application?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can you test this application?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "questions",
    message: "How can a user ask additional questions?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const filename = `README.md`;
    console.log(answers.beginGeneration);
    
    fs.writeFile(filename, generateMarkdown(answers), (err) =>
    err ? console.error(err) : console.log("Success!")
    );
  });
};

// // Function call asking if the user would like to generate a readme.
function generate() {
  inquirer.prompt(generateReadme)
  .then((answers) => {
    console.log(answers.beginGeneration);
    if (answers.beginGeneration === "No") {
      process.exit();
    };
    init();
  })
};

generate();