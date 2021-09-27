function Employee(name, id, email) {    // This struture was taken from the email that was shown to us in the weekly module
    this.name = name;
    this.id = id;
    this.email = email; 
};

    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return 'Employee';
    };
}

module.exports = Employee;