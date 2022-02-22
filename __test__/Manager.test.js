const Manager = require("../lib/Manager");

test("Can we create an office number?", () => {
    const testOfficeNumber = 3;
    const employee = new Manager(11111, "Jo Hill", "jos.a.hill@gmail.com", testOfficeNumber);
    expect(employee.officeNumber).toBe(testOfficeNumber);
});

test("Will the testOfficeNumber return the office number?", () => {
    const testOfficeNumber = 3;
    const employee = new Manager(11111, "Jo Hill", "jos.a.hill@gmail.com", testOfficeNumber);
    expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Can we test the role type?", () => {
    const returnValue = "Manager";
    const employee = new Manager(11111, "Jo Hill", "jos.a.hill@gmail.com", 3);
    expect(employee.getRole()).toBe(returnValue);
});