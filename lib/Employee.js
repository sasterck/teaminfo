// Employee Class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }
    
    

    getName() {
        return this.name;
    }
    getJob() {
        return this.title;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    
}
