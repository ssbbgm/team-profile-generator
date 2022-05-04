//get node modules
const inquirer = require('inquirer');
const fs = require('fs');

//get html Info
const generateHTML = require('./src/generateHTML');

//get team info

const addManager = () => {
    return inquirer
    .prompt([
      {
          type: 'input',
          message: 'What is the manager\'s name?',
          name: 'name',
          validate: function (name) {
              if (name.length < 1) {
                  return console.log("Please provide a manager's name.");
              }
              return true;
          }
      },
      {
          type: 'input',
          message: 'Please provide a description for this project: ',
          name: 'description',
          validate: function (data) {
              if (data.length < 1) {
                  return console.log("A valid description for the project is required.");
              }
              return true;
          }
      },
    ])
}