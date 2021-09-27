const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return `${this.github}`; // just like last week the answers should post here for validation
    }
    getRole() {
        return `Engineer`;
    }
}

module.exports = Engineer;