const Intern = require("../lib/Intern");

test("Can we create a school name?", () => {
    const testSchool = "School Name";
    const employee = new Intern(11111,"Jo Hill", "jos.a.hill@gmail.com", testSchool);
    expect(employee.school).toBe(testSchool);
});

test("Can getSchool return the School Name?", () => {
    const testSchool = "School Name";
    const employee = new Intern(11111,"Jo Hill", "jos.a.hill@gmail.com", testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});

test("Can we test the role type?", () => {
    const returnValue = "Intern";
    const employee = new Intern(11111,"Jo Hill", "jos.a.hill@gmail.com", "School Name");
    expect(employee.getRole()).toBe(returnValue);
});