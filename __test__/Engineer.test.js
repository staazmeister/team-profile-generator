const Engineer = require("../lib/Engineer");

test("Are we able to create a github?", () => {
    const testGithub = "staazmeister";
    const employee = new Engineer(11111, "Jo Hill", "jos.a.hill@gmail.com", testGithub);
    expect(employee.github).toBe(testGithub);
});

test("Can getGithub will return github?", () => {
    const testGithub = "staazmeister";
    const employee = new Engineer(11111, "Jo Hill", "jos.a.hill@gmail.com", testGithub);
    expect(employee.getGithub()).toBe(testGithub);
});

test("Can we test the role type?", () => {
    const returnValue = "Engineer";
    const employee = new Engineer(11111, "Jo Hill", "jos.a.hill@gmail.com", "staazmeister");
    expect(employee.getRole()).toBe(returnValue);
});