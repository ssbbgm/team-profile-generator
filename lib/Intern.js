//Pulls in the info from the Employee class
const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name, id, email, school){
        super(name, id, email);
        this.school= school;
    }

    //Gets GitHub Info

    getSchool(){
        return this.school
    }

    //Overrides the "Employee" from extended Employee Class
    getRole(){
        return 'Intern'
    }
}