const Employee = require("../lib/employee");

// Employee Class / Construtor Jest test
describe("Employee", () => {
  it("Should create an object with given parameters", () => {
    const employee = new Employee("Dave", 1, "dave@gmail.com");
    expect(employee).toEqual({
      _name: "Dave",
      _id: 1,
      _email: "dave@gmail.com",
      _role: "Employee",
    });
  });

  it("Should return name using getter", () => {
    const employee = new Employee("Dave", 1, "dave@gmail.com");
    expect(employee.name).toEqual("Dave");
  });

  it("Should return id using getter", () => {
    const employee = new Employee("Dave", 1, "dave@gmail.com");
    expect(employee.id).toEqual(1);
  });

  it("Should return email using getter", () => {
    const employee = new Employee("Dave", 1, "dave@gmail.com");
    expect(employee.email).toEqual("dave@gmail.com");
  });

  it("Should return role using getter", () => {
    const employee = new Employee("Dave", 1, "dave@gmail.com");
    expect(employee.role).toEqual("Employee");
  });
});
