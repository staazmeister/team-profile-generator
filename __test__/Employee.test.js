const Employee = require('../lib/Employee')

describe('Employee Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an id, name, email', () => {
            const employee = new Employee(11111, "Jo Hill", "jos.a.hill@gmail.com")

            expect(employee.id).toEqual(11111);
            expect(employee.name).toEqual("Jo Hill");
            expect(employee.email).toEqual("jos.a.hill@gmail.com");
        });
    });
});

test("Will the test ID go through getID method?", () => {
    const testID = 11111;
    const employee = new Employee(testID, "Jo Hill");
    expect(employee.getId()).toBe(testID);
})

test("Will the test name go through getName method?", () => {
    const testName = "Jo Hill";
    const employee = new Employee(11111, testName);
    expect(employee.getName()).toBe(testName);
})



test("Will this test email go through getEmail method?", () => {
    const testEmail = "jos.a.hill@gmail.com";
    const employee = new Employee(11111,"Jo Hill", testEmail);
    expect(employee.getEmail()).toBe(testEmail);
})

test("Can we test the role type?", () => {
    const returnValue = "Employee";
    const employee = new Employee(11111,"Jo Hill", "jos.a.hill@gmail.com");
    expect(employee.getRole()).toBe(returnValue);
})