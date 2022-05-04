//Pulls in the info from the Employee class
const Employee = require('./employee');

class Engineer extends Employee {

    
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //Overrides the "Employee" from extended Employee Class
    getRole(){
        return 'Manager'
    }
}