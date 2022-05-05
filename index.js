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

const buildTeam = () => {
    fs.writeFileSync('./dist/index.html', generateHTML(team), (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!'))
}

//get employee info

// const addTeamMember = () => {
//     return inquirer
//     .prompt([
//         {
//             type: 'list',
//             message: 'What is this team member\'s role?',
//             choices: [
//                 'Engineer',
//                 'Intern',
//             ],
//             name: 'role',
//         },
//         {
//           type: 'input',
//           message: 'What is the team member\'s name?',
//           name: 'name',
//           validate: function (name) {
//               if (name.length <= 1) {
//                   return console.log("Please provide a team member's name!");
//               }
//               return true;
//             }
//         },
//         {
//           type: 'input',
//           message: 'Please provide the team member\'s ID. ',
//           name: 'id',
//           validate: function (id) {
//               if (isNaN(id)) {
//                   return console.log("Please provide the ID in number form!");
//               }
//               return true;
//              }
//         },
//         {
//         type: 'input',
//         message: 'Please provide the team member\'s email. ',
//         name: 'email',
//         validate: function (email) {
//             if (!validator.validate(email)) {
//                 return console.log("Please provide a valid email address!");
//             }
//             return true;
//             }
//         },
//         {
//             type: 'input',
//             message: 'Please provide the team member\'s github username (without the @). ',
//             name: 'github',
//             when: (input) => input.role === "Engineer",
//             validate: function (github) {
//                 if (github.length <= 1) {
//                     return console.log("Please enter the employee's github username!");
//                 }
//                 return true;
//                }
//         },
//         {
//             type: 'input',
//             message: 'Please provide the team member\'s school. ',
//             name: 'school',
//             when: (input) => input.role === "Intern",
//             validate: function (school) {
//                 if (school.length <= 1) {
//                     return console.log("Please enter the employee's school name!");
//                 }
//                 return true;
//                }
//         },
//         {
//             type: 'confirm',
//             name: 'addMoreMembers',
//             message: 'Would you like to add more team members?',
//             default: false
//         }
//     ])
//     .then(data  => {
//         const role = data.role;
//         const name = data.name;
//         const id = data.id;
//         const email = data.email;
//         const github = data.github; 
//         const school = data.school;
//         const confirm = data.addMoreMembers;

//         let teamMember;

//         if (role === 'Engineer') {
//             let engineer = new Engineer (name, id, email, github);
//             teamMember = engineer;
//         } if (role === 'Intern') {
//             let intern = new Intern (name, id, email, school);
//             teamMember = intern;
//         }

//         team.push(teamMember);

//         if (confirm) {
//             addTeamMember();
//             // return team;
//         } else {
//             return team;
//         }

//     });
    
// }

const init = () => {
    addManager()
    // .then(addTeamMember)
    // .then(team => fs.writeFile('./dist/index.html', generateHTML(team), (err) =>
    // err ? console.log(err) : console.log('Successfully created index.html!')))
};

init();

