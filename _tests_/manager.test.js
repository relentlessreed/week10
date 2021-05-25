const Manager = require("../lib/manager");

// Manager Class / Construtor Jest test
describe("Manager", () => {
  it("Should create an object with given parameters", () => {
    const manager = new Manager("Dave", 1, "dave@gmail.com", 123);
    expect(manager).toEqual({
      _name: "Dave",
      _id: 1,
      _email: "dave@gmail.com",
      _role: "Manager",
      _officeNumber: 123,
    });
  });

  it("Should return name using getter", () => {
    const manager = new Manager("Dave", 1, "dave@gmail.com", 123);
    expect(manager.name).toEqual("Dave");
  });

  it("Should return id using getter", () => {
    const manager = new Manager("Dave", 1, "dave@gmail.com", 123);
    expect(manager.id).toEqual(1);
  });

  it("Should return email using getter", () => {
    const manager = new Manager("Dave", 1, "dave@gmail.com", 123);
    expect(manager.email).toEqual("dave@gmail.com");
  });

  it("Should return role using getter", () => {
    const manager = new Manager("Dave", 1, "dave@gmail.com", 123);
    expect(manager.role).toEqual("Manager");
  });

  it("Should return office number using getter", () => {
    const manager = new Manager("Dave", 1, "dave@gmail.com", 123);
    expect(manager.officeNumber).toEqual(123);
  });
});
