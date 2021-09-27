const { test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Sean', '23', 'smurphy7326@email.com');
})