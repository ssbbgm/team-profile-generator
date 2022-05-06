const Engineer = require('../lib/Engineer');

test('Takes in string arugment for github', () => {
    const github = 'ssbbgm';
    const employee = new Engineer('Sherreka', 10, 'thegoat@test.com', github);
    expect(employee.github).toBe(github);
});

test('Retrieves the github from the getGithub()', () => {
    const github = 'ssbbgm';
    const employee = new Engineer('Sherreka', id, 'thegoat@test.com', github);
    expect(employee.getGithub()).toBe(github);
});

test('Retrieves the role of the employee from the getRole()', () => {
    const role = 'Engineer';
    const employee = new Engineer('Sherreka', 10, 'thegoat@test.com', 'ssbbgm');
    expect(employee.getRole()).toBe(role);
})