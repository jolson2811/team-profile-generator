const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee('Roger');

    expect(employee.name).toBe('Roger');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('roger@email.com');
});