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
        console.log(manager);

        const htmlPageContent = generateHTML(manager);
    
        fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );

    });
    
}


//get employee info

const addTeamMember = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            message: 'What is this team member\'s role?',
            choices: [
                'Engineer',
                'Intern',
            ],
            name: 'role',
        },
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
            when: (input) => input.role === "Engineer",
            validate: function (github) {
                if (github.length <= 1) {
                    return console.log("Please enter the employee's github username!");
                }
                return true;
               }
        },
        {
            type: 'input',
            message: 'Please provide the team member\'s school. ',
            name: 'school',
            when: (input) => input.role === "Intern",
            validate: function (school) {
                if (school.length <= 1) {
                    return console.log("Please enter the employee's school name!");
                }
                return true;
               }
        },
        {
            type: 'confirm',
            name: 'addMoreTeamMembers',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(data  => {
        // const htmlPageContent = generateHTML(answers);
    
        // fs.writeFile('index.html', htmlPageContent, (err) =>
        //   err ? console.log(err) : console.log('Successfully created index.html!')
        // );
        console.log(data);
      });
    
}

addManager()
// addTeamMember()