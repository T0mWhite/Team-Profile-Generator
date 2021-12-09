// Including packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./Assets/utilities/generateHTML");
const employeeGenerator = require("./Assets/utilities/generateEmployee");
const Manager = require("./lib/Manager");
const { mainModule } = require("process");

let employeeArray = [];

// Create a starting question to prompt the user if they would like to use the application
const generateInit = {
  type: "list",
  name: "initGeneration",
  message: "This application will help you generate a team page.",
  choices: [
    new inquirer.Separator(" = Please choose: = "),
    {
      name: "Continue",
    },
    {
      name: "End",
    },
  ],
};

// Create an array of questions for user input
const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Who is the manager of this team?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the manager's ID number?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the manager's email address?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is the manager's office number?",
  },
];

// Function to create a team manager
async function generateManagerInfo() {
  await inquirer.prompt(managerQuestions).then((managerAnswers) => {
    console.log(managerAnswers.managerName);
    generateManagerCard(managerAnswers);
  });
}

// Prompts user to make a team page
async function generateTeamPage() {
  await inquirer.prompt(generateInit).then((initAnswers) => {
    console.log(initAnswers.initGeneration);
    const filename = `index.html`;
      console.log("We're in");
      fs.promises.writeFile(filename, generateHTML(), err => 
      err ? console.error(err) : console.log("Finally..."))
    })
  console.log("We're out!");
  generateManagerInfo();
  };

// Called on load
generateTeamPage();


// Generates manager object, pushes into employee array, creates card from object.
let generateManagerCard = (managerAnswers) => {
console.log("Generating manager object.");
  const ManagerObject = {
    managerName,
    managerID,
    managerEmail,
    managerOfficeNumber,
  } = managerAnswers;

  employeeArray.push(ManagerObject)

const cardEl = document.createElement("div");
main.appendChild(cardEl);
cardEl.textContent = managerCard;

return managerCard;

};