const fs = require("fs");

const employeeArray = [];

// // Function to generate HTML div for an engineer
let generateManager = (managerAnswers) => {
  console.log("Generating manager object.");
  const { managerName, managerId, managerEmail, managerOfficeNumber } =
    managerAnswers;

  let managerCard = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title bgred">Manager</h5>
      <h3 class="card-title">${managerName}</h3>
      <p class="card-text">
      Employee ID: ${managerId}
      <br>
      Email: <a href="mailto:${managerEmail}">${managerEmail}</a>  
      <br>
      Office: ${managerOfficeNumber}</p>
    </div>
    </div>`;

  employeeArray.push(managerCard);

  return employeeArray;
};

// // Function to generate HTML div for an engineer
let generateEngineer = (engineerAnswers) => {
  console.log("Generating engineer object.");
  const { engineerName, engineerId, engineerEmail, engineerGithub } =
    engineerAnswers;

  let engineerCard = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title bgblue">Engineer</h5>
      <h3 class="card-title">${engineerName}</h3>
      <p class="card-text">
      Employee ID: ${engineerId}
      <br>
      Email: <a href="mailto:${engineerEmail}">${engineerEmail}</a> 
      <br>
      Github: 
      <a href="github.com/${engineerGithub}">github.com/${engineerGithub}</a>
      </p>
    </div>
    </div>`;

  employeeArray.push(engineerCard);

  return employeeArray;
};

// Function to generate HTML div for an intern
let generateIntern = (internAnswers) => {
  console.log("Generating intern object.");
  const { internName, internId, internEmail, internSchool } = internAnswers;

  let internCard = `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title bggreen">Intern</h5>
        <h3 class="card-title">${internName}</h3>
        <p class="card-text">
        Employee ID: ${internId}
        <br>
        Email: <a href="mailto:${internEmail}">${internEmail}</a> 
        <br>
        School: ${internSchool}</p>
      </div>
      </div>`;

  employeeArray.push(internCard);

  return employeeArray;
};

let generateHTML = () => {
  let joinedArray = employeeArray.join(" ");

  let teamPage = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="./styles.css">
<title>Document</title>
</head>
<body>
<header>
<div class="jumbotron jumbotron-fluid">
  <div class="container bgjumbo">
    <h1 class="display-4">Your Team</h1>
    <p class="lead">Please enjoy these cards with some information of your fine employees.</p>
  </div>
</div>
</header>
<main>
  <div class="justify-content-center align-items-center d-flex">
  ${joinedArray}
  </div>
</main>
    <script src="/index.js" type="text.javascript"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>`;

  const filepath = `./dist/index.html`;
  fs.writeFile(filepath, teamPage, (err) =>
    err ? console.error(err) : console.log("Team Page Generated")
  );
};

// Wrap up the exports in an object
const employeeFuncs = {
  generateManager,
  generateEngineer,
  generateIntern,
  generateHTML,
};

// Export it
module.exports = employeeFuncs;
