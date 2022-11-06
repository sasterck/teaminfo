// add the intern

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
     
// add school since they a studious student
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;