const Manager = require('../lib/Manager');

test('Takes in number arugment for office', () => {
    const office = 14;
    const employee = new Manager('Sherreka', 10, 'thegoat@test.com', office);
    expect(employee.office).toBe(office);
});

test('Retrieves the role of the employee from the getRole()', () => {
    const role = 'Manager';
    const employee = new Manager ('Sherreka', 10, 'thegoat@test.com', 14);
    expect(employee.getRole()).toBe(role);
})