//Pulls in the info from the Employee class
const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //Overrides the "Employee" from extended Employee Class
    getRole(){
        return 'Manager'
    }
}