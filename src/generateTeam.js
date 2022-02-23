const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")


function generateCards(team) {
  let cards = []
  for(let i = 0; i < team.length; i++) {
    const teamArr = team[i];
    switch(teamArr.getRole()) {
      case "Manager":
        const manager = new Manager(teamArr.id, teamArr.name, teamArr.email, teamArr.officeNumber);
        cards.push(generateManagerCard(manager));
        break;
      case "Engineer":
        const engineer = new Engineer(teamArr.id, teamArr.name, teamArr.email, teamArr.github);
        cards.push(generateEngineerCard(engineer));
        break;
      case "Intern":
        const intern = new Intern(teamArr.id, teamArr.name, teamArr.email, teamArr.school);
        cards.push(generateInternCard(intern));
        break;
    }
  }
  return cards.join(``)
}

let generateManagerCard = (Manager) => {
  return `
  <div class="card m-4 shadow-lg" style="width: 18rem">
    <div class="card-header bg-primary text-white">
      <h3 class="card-title">${Manager.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-coffee"></i> ${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
  `
}

let generateEngineerCard = (Engineer) => {
  return `
  <div class="card m-4 shadow-lg" style="width: 18rem">
  <div class="card-header bg-primary text-white">
      <h3 class="card-title">${Engineer.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-cogs"></i> ${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>
  `
};

let generateInternCard = (Intern) => {
  return `
  <div class="card m-4 shadow-lg" style="width: 18rem">
  <div class="card-header bg-primary text-white">
      <h3 class="card-title">${Intern.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-graduation-cap"></i> ${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

function generateTeam(team) {
  console.log(team)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <title>My Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-danger text-white">
  <div class="container">
    <h1 class="display-4 text-center">My Team</h1>
  </div>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
${generateCards(team)}
</div>
</body>
</html>
    `
}

module.exports = generateTeam;