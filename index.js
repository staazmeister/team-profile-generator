const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require("fs");
const generateTeam = require("./src/generateTeam");
team = [];

const managerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your team manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is your team manager's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your team manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your team manager's office number?",
        },
        {
            type: "list",
            name: "addMember",
            message: "Would you like to add additional team members?",
            choices: ["Engineer", "Intern", "All done adding team members"],
        }
    ])
    .then((mangerInput) => {
    
        const manager = new Manager(mangerInput.id, mangerInput.name, mangerInput.email, mangerInput.officeNumber)
        team.push(manager)
        switch(mangerInput.addMember) {
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default: 
            writeToFile("dist/index.html", generateTeam(team))
        }
    });
};

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
        },
        {
            type: "list",
            name: "addMember",
            message: "What type of team member would you like to add next?",
            choices: ["Engineer", "Intern", "All done adding team members"],
        }
    ])
    .then((engineerInput) => {
        const engineer = new Engineer(engineerInput.id, engineerInput.name, engineerInput.email, engineerInput.github)
        team.push(engineer)
        switch(engineerInput.addMember) {
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default: 
            writeToFile("dist/index.html", generateTeam(team))
        }
    })
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        },
        {
            type: "list",
            name: "addMember",
            message: "What type of team member would you like to add next?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        }
    ])
    .then((internInput) => {
        const intern = new Intern(internInput.id, internInput.name, internInput.email, internInput.school)
        team.push(intern)
        switch(internInput.addMember){
            case "Engineer":
                engineerQuestions();
                break;
            case "Intern":
                internQuestions();
                break;
            default:
                writeToFile("dist/index.html", generateTeam(team))
        }
    })
}

managerQuestions();


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log("Team Profile Generated! File saved to 'dist' folder")
    });
};