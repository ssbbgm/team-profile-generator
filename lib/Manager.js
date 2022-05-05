//Pulls in the info from the Employee class
const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
    }

    //Overrides the "Employee" from extended Employee Class
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager;