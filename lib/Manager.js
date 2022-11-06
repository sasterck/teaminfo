//adding manager stuff

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }

    // office number
    
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;
