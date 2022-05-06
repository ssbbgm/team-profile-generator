const Employee = require('../lib/Employee');

test('Creates a new employee instance', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('Takes in a string argument for name', () => {
    const name = 'Sherreka';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Takes in a number argument for id', () => {
    const id = 10;
    const employee = new Employee('Sherreka', id);
    expect(employee.id).toBe(id);
});

test('Takes in string arugment for email', () => {
    const email = 'thegoat@test.com';
    const employee = new Employee('Sherreka', 10, email);
    expect(employee.email).toBe(email);
});

test('Retrieves the name from getName()', () => {
    const name = 'Sherreka';
    const employee = new Employee(name, 10, 'thegoat@test.com');
    expect(employee.getName()).toBe(name);
});

test('Retrieves the id from the getID()', () => {
    const id = 10;
    const employee = new Employee('Sherreka', id, 'thegoat@test.com');
    expect(employee.getID()).toBe(id);
});

test('Retrieves the email from the getEmail()', () => {
    const email = 'thegoat@test.com';
    const employee = new Employee('Sherreka', 10, email);
    expect(employee.getEmail()).toBe(email);
});

test('Retrieves the role of the employee from the getRole()', () => {
    const role = 'Employee';
    const employee = new Employee('Sherreka', 10, email);
    expect(employee.getRole()).toBe(role);
})