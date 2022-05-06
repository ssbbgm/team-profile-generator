//get node modules
const inquirer = require('inquirer');
const fs = require('fs');
const validator = require('email-validator')

//get html Info
const generateHTML = require('./src/generateHTML');


//get the classes 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//place to put all team members
let team = [];

//get manager's info

const addManager = () => {
    return inquirer
    .prompt([
        {
          type: 'input',
          message: 'What is the manager\'s name?',
          name: 'name',
          validate: function (name) {
              if (name.length <= 1) {
                  return console.log("Please provide a manager's name!");
              }
              return true;
            }
        },
        {
          type: 'input',
          message: 'Please provide the manager\'s ID. ',
          name: 'id',
          validate: function (id) {
              if (isNaN(id)) {
                  return console.log("Please provide the ID in number form!");
              }
              return true;
             }
        },
        {
        type: 'input',
        message: 'Please provide the manager\'s email. ',
        name: 'email',
        validate: function (email) {
            if (!validator.validate(email)) {
                return console.log("Please provide a valid email address!");
            }
            return true;
            }
        },
        {
            type: 'input',
            message: 'Please provide the manager\'s office number. ',
            name: 'office',
            validate: function (office) {
                if (isNaN(office)) {
                    return console.log("Please provide the information in number form!");
                }
                return true;
            }
        }
    ])
    .then(data => {

        const name = data.name;
        const id = data.id;
        const email = data.email;
        const office = data.office; 

        let manager = new Manager (name, id, email, office);

        team.push(manager);

        createTeam();

    });
    
}


//Create the team
const createTeam = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What type of team member would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'None'
            ],
            name: 'memberChoice',
        },
        
    ])
    .then((response) => {
        switch(response.memberChoice){
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'None':
                buildTeam();
                break;   
        }
    })    
}


//Create the engineer
const addEngineer = () => {
    return inquirer
    .prompt([
        {
          type: 'input',
          message: 'What is the team member\'s name?',
          name: 'name',
          validate: function (name) {
              if (name.length <= 1) {
                  return console.log("Please provide a team member's name!");
              }
              return true;
            }
        },
        {
          type: 'input',
          message: 'Please provide the team member\'s ID. ',
          name: 'id',
          validate: function (id) {
              if (isNaN(id)) {
                  return console.log("Please provide the ID in number form!");
              }
              return true;
             }
        },
        {
        type: 'input',
        message: 'Please provide the team member\'s email. ',
        name: 'email',
        validate: function (email) {
            if (!validator.validate(email)) {
                return console.log("Please provide a valid email address!");
            }
            return true;
            }
        },
        {
            type: 'input',
            message: 'Please provide the team member\'s github username (without the @). ',
            name: 'github',
            validate: function (github) {
                if (github.length <= 1) {
                    return console.log("Please enter the employee's github username!");
                }
                return true;
               }
        },
    ])
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        createTeam();
    }) 
}
  
//Create the intern
const addIntern = () => {
    return inquirer
    .prompt([
        {
          type: 'input',
          message: 'What is the team member\'s name?',
          name: 'name',
          validate: function (name) {
              if (name.length <= 1) {
                  return console.log("Please provide a team member's name!");
              }
              return true;
            }
        },
        {
          type: 'input',
          message: 'Please provide the team member\'s ID. ',
          name: 'id',
          validate: function (id) {
              if (isNaN(id)) {
                  return console.log("Please provide the ID in number form!");
              }
              return true;
             }
        },
        {
        type: 'input',
        message: 'Please provide the team member\'s email. ',
        name: 'email',
        validate: function (email) {
            if (!validator.validate(email)) {
                return console.log("Please provide a valid email address!");
            }
            return true;
            }
        },
        {
            type: 'input',
            message: 'Please provide the team member\'s school. ',
            name: 'school',
            validate: function (school) {
                if (school.length <= 1) {
                    return console.log("Please enter the employee's school name!");
                }
                return true;
               }
        },
    ])
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        createTeam();
    }) 
}    


//Build the team
const buildTeam = () => {
    fs.writeFileSync('./dist/index.html', generateHTML(team), (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!'))
}

//All functions
const init = () => {
    addManager()
};

init();

