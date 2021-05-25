const Intern = require("../lib/intern");

// Intern Class / Construtor Jest test
describe("Intern", () => {
  it("Should create an object with given parameters", () => {
    const intern = new Intern("Dave", 1, "dave@gmail.com", "School");
    expect(intern).toEqual({
      _name: "Dave",
      _id: 1,
      _email: "dave@gmail.com",
      _role: "Intern",
      _school: "School",
    });
  });

  it("Should return name using getter", () => {
    const intern = new Intern("Dave", 1, "dave@gmail.com", "School");
    expect(intern.name).toEqual("Dave");
  });

  it("Should return id using getter", () => {
    const intern = new Intern("Dave", 1, "dave@gmail.com", "School");
    expect(intern.id).toEqual(1);
  });

  it("Should return email using getter", () => {
    const intern = new Intern("Dave", 1, "dave@gmail.com", "School");
    expect(intern.email).toEqual("dave@gmail.com");
  });

  it("Should return role using getter", () => {
    const intern = new Intern("Dave", 1, "dave@gmail.com", "School");
    expect(intern.role).toEqual("Intern");
  });

  it("Should return school using getter", () => {
    const intern = new Intern("Dave", 1, "dave@gmail.com", "School");
    expect(intern.school).toEqual("School");
  });
});
