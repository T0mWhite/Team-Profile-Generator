// Including packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./Assets/utilities/generateHTML");
// const generateEmployee = require("./Assets/utilities/generateEmployee");

let employeeArray = [];

// Create a starting question to prompt the user if they would like to use the application
const generateInit = [
  {
    type: "list",
    name: "beginGeneration",
    message: "Select continue to build your team.",
    choices: [
      new inquirer.Separator(" = Please choose: = "),
      {
        name: "Continue",
      },
      {
        name: "End",
      },
    ],
  },
];

// Create an array of questions for user input
const teamQuestions = [
  {
    type: "input",
    name: "createdYear",
    message: "What year was the software created?",
  },
];

// // Function call asking if the user would like to generate a readme.

generateTeamPage();

function generateTeamPage() {
  inquirer.prompt(generateInit).then((answers) => {
    console.log(answers.beginGeneration);
    if (answers.beginGeneration === "End") {
      process.exit();
    }
    const filename = `index.html`;
    fs.writeFile(filename, generateHTML(), (err) =>
      err ? console.error(err) : console.log("index.html created!")
    );
  });
};

// Create a function to initialize app
// function generateEmployee() {
//   inquirer.prompt(teamQuestions)
//   .then((answers) => {
//     const filename = `README.md`;
//     console.log(answers.beginGeneration);

//     fs.writeFile(filename, generateMarkdown(answers), (err) =>
//     err ? console.error(err) : console.log("Success!")
//     );
//   });
// };
