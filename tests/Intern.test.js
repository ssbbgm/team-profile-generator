const Intern = require('../lib/Intern');

test('Takes in string arugment for school', () => {
    const school = 'CSU';
    const employee = new Intern('Sherreka', 10, 'thegoat@test.com', school);
    expect(employee.school).toBe(school);
});

test('Retrieves the school from the getSchool()', () => {
    const school = 'CSU';
    const employee = new Intern ('Sherreka', 10, 'thegoat@test.com', school);
    expect(employee.getSchool()).toBe(school);
});

test('Retrieves the role of the employee from the getRole()', () => {
    const role = 'Intern';
    const employee = new Intern ('Sherreka', 10, 'thegoat@test.com', 'CSU');
    expect(employee.getRole()).toBe(role);
})