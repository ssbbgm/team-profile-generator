//Pulls in the info from the Employee class
const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    //Gets GitHub Info

    getGithub(){
        return this.github
    }

    //Overrides the "Employee" from extended Employee Class
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;