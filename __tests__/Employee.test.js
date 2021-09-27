const { test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');


test('creates an employee object', () => {
    const employee = new Employee('Sean');

    expect(employee.name).toBe('Sean');
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toEqual(expect.any('smurphy@email.com'));
});

test('get employee name', () => {
    const employee = new Employee('Sean', '23', 'smurphy@email.com');
    expect(employee.getName()).toBe('Sean');
});

test('get employee id', () => {
    const employee = new Employee('Sean', '23', 'smurphy@email.com'); // 23 because it is my favorite number 
    expect(employee.getId()).toBe('23');
});

test('get employee email', () => {
    const employee = new Employee('Sean', '23', 'smurphy@email.com');
    expect(employee.getEmail()).toBe('smurphy@email.com');
});

// not sure if this one is nessessary but have to test reqardless
test('get employee role', () => {
    const employee = new Employee('Sean', '23', 'smurphy@email.com');
    expect(employee.getEmail()).toBe('Employee');
});