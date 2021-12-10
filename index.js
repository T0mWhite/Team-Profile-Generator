// Including packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const employeeFunctions = require("./Assets/utilities/generateEmployee");

// const generateManager = require("./Assets/utilities/generateEmployee");
// const generateEngineer = require("./Assets/utilities/generateEmployee");
// const generateIntern = require("./Assets/utilities/generateEmployee");

// const employeeArray = [];

// const generateManager = require("./Assets/utilities/generateEmployee");
// const generateHTML = require("./Assets/utilities/generateHTML");
// const employeeGenerator = require("./Assets/utilities/generateEmployee");
// const Manager = require("./lib/Manager");

// Create a starting question to prompt the user if they would like to use the application
const generateInit = {
  type: "list",
  name: "initChoice",
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

// Array for manager input
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

// Array asking to add new employee
const addEmployeeQuestion = {
  type: "list",
  name: "addEmployeeType",
  message: "Would you like to add another employee to the team?",
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

// Array to begin employee generation
const employeeChoiceQuestion = {
  type: "list",
  name: "employeeType",
  message: "What is the position of this employee?",
  choices: [
    new inquirer.Separator(" = Please choose: = "),
    {
      name: "Engineer",
    },
    {
      name: "Intern",
    },
  ],
};

// Array for manager input
const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineer's name'?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is the engineer's ID number?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineer's email address?",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What is the engineer's GitHub username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the intern's name'?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is the intern's ID number?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the intern's email address?",
  },
  {
    type: "input",
    name: "internGithub",
    message: "What school is the intern attending?",
  },
];

generateTeamPage();

// Prompts user to make a team page
function generateTeamPage() {
  inquirer.prompt(generateInit).then((initAnswers) => {
    console.log(initAnswers.initChoice);
    // const filename = `index.html`;
    // console.log("We're in");
    //   fs.promises.writeFile(filename, generateHTML(), err =>
    //   err ? console.error(err) : console.log("Finally..."))
    // })
    // console.log("We're out!");
    if (initAnswers.initChoice === "End") {
      process.exit();
    }
    generateManagerInfo();
  });
}

// Function to create a team manager
function generateManagerInfo() {
 inquirer.prompt(managerQuestions).then((managerAnswers) => {
    // Sends the answers to be processed into HTML
    generateManager(managerAnswers);
    // Generates more employees
    addNewEmployee();
  });
}

// Function asking to add new employee
async function addNewEmployee() {
  console.log("Add more employees?");
  await inquirer.prompt(addEmployeeQuestion).then((addEmployeeAnswer) => {
    console.log(addEmployeeAnswer.addEmployeeType);
    if (addEmployeeAnswer.addEmployeeType === "Yes") {
      generateEmployeeInfo();
    } else {
      const filename = `index.html`;
      console.log("We're in");
      fs.promises.writeFile(filename, generateHTML(), (err) =>
        err ? console.error(err) : console.log("Finally...")
      );
    }
  });
}
// process.exit();

// Function asking which type of employee is being added
function generateEmployeeInfo() {
  console.log("Generating Employee Info");
  inquirer.prompt(employeeChoiceQuestion).then((employeeAnswer) => {
    console.log(employeeAnswer.employeeType);
    if (employeeAnswer.employeeType === "Engineer") {
      generateEngineerInfo();
    } else {
      generateInternInfo();
    }
  });
}

// Function asking for engineer's info
function generateEngineerInfo() {
  console.log("Generating Engineer Info");
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    generateEngineer(engineerAnswers);
    addNewEmployee();
  });
}

// Function asking for interns's info
function generateInternInfo() {
  console.log("Generating Intern Info");
  inquirer.prompt(internQuestions).then((internAnswers) => {
    generateIntern(internAnswers);
    addNewEmployee();
  });
}




// Function to generate HTML div for an engineer
// let generateManager = (managerAnswers) => {
//   console.log("Generating manager object.");
//   const {
//     managerName,
//     managerId,
//     managerEmail,
//     managerOfficeNumber,
//   } = managerAnswers;

//   let managerCard = `<div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">Manager</h5>
//       <h3 class="card-title">${managerName}</h3>
//       <p class="card-text">Employee ID: ${managerId}
//       Email: ${managerEmail}
//       Office: ${managerOfficeNumber}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//     </div>`;

//   employeeArray.push(managerCard);
//   console.log(employeeArray);


//   return employeeArray;
// };