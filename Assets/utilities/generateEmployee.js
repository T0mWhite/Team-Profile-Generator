const employeeArray = [];

// // Function to generate HTML div for an engineer
let generateManager = (managerAnswers) => {
  console.log("Generating manager object.");
  const {
    managerName,
    managerId,
    managerEmail,
    managerOfficeNumber,
  } = managerAnswers;

  let managerCard = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <h3 class="card-title">${managerName}</h3>
      <p class="card-text">Employee ID: ${managerId}
      Email: ${managerEmail}
      Office: ${managerOfficeNumber}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`;

  employeeArray.push(managerCard);
  console.log(employeeArray);


  return employeeArray;
};

// // Function to generate HTML div for an engineer
let generateEngineer = (engineerAnswers) => {
  console.log("Generating engineer object.");
  const {
    engineerName,
    engineerId,
    engineerEmail,
    engineerGithub,
  } = engineerAnswers;

  let engineerCard = `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <h3 class="card-title">${engineerName}</h3>
      <p class="card-text">Employee ID: ${engineerId}
      Email: ${engineerEmail}
      Office: ${engineerGithub}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`;

  employeeArray.push(engineerCard);
  console.log(employeeArray);


  return employeeArray;
};

// Function to generate HTML div for an intern
let generateIntern = (internAnswers) => {
  console.log("Generating intern object.");
  const {
    internName,
    internId,
    internEmail,
    internSchool
    } = internAnswers;

  let internCard = `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <h3 class="card-title">${internName}</h3>
        <p class="card-text">Employee ID: ${internId}
        Email: ${internEmail}
        Office: ${internSchool}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>`;

  employeeArray.push(internCard);
  console.log(employeeArray);


  return employeeArray;
};

// module.exports = {
//   employeeArray,
//   generateManager,
//   generateEngineer,
//   generateIntern
// };


module.exports.generateIntern = generateIntern;
module.exports.generateManager = generateManager;
module.exports.generateEngineer = generateEngineer;