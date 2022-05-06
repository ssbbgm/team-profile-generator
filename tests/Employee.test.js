const Employee = require('../lib/Employee');

test('Creates a new employee instance', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object')
})