function generateHTML(managerCard) {
  console.log("We generate!");

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${managerCard}
    <script src="./Assets/scripts/index.js" type="text.javascript"></script>
</body>
</html>`;
}

let generateManager = (managerAnswers) => {

  const ManagerObject = {
    managerName,
    managerID,
    managerEmail,
    managerOfficeNumber,
  } = managerAnswers;

  let managerCard = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${managerName}</h5>
    <p class="card-text">${managerID}, ${managerEmail}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`

return managerCard;

};
// let generateEngineer = (engineerAnswers) => {

//   const EngineerObject = {
//     managerName,
//     managerID,
//     managerEmail,
//     managerOfficeNumber,
//   } = managerAnswers;

// };

// let generateIntern = (internAnswers) => {

//   const InternObject = {
//     managerName,
//     managerID,
//     managerEmail,
//     managerOfficeNumber,
//   } = managerAnswers;

// };


//   generateHTML();
// };

// // managerAnswers, engineerAnswers, InternAnswers

module.exports = generateManager;
// module.exports = generateEngineer;
// module.exports = generateIntern;
module.exports = generateHTML;
