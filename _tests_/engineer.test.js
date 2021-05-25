const Engineer = require("../lib/engineer");

// Engineer Class / Construtor Jest test
describe("Engineer", () => {
  it("Should create an object with given parameters", () => {
    const engineer = new Engineer("Dave", 1, "dave@gmail.com", "davesgithub");
    expect(engineer).toEqual({
      _name: "Dave",
      _id: 1,
      _email: "dave@gmail.com",
      _role: "Engineer",
      _github: "davesgithub",
    });
  });

  it("Should return name using getter", () => {
    const engineer = new Engineer("Dave", 1, "dave@gmail.com", "davesgithub");
    expect(engineer.name).toEqual("Dave");
  });

  it("Should return id using getter", () => {
    const engineer = new Engineer("Dave", 1, "dave@gmail.com", "davesgithub");
    expect(engineer.id).toEqual(1);
  });

  it("Should return email using getter", () => {
    const engineer = new Engineer("Dave", 1, "dave@gmail.com", "davesgithub");
    expect(engineer.email).toEqual("dave@gmail.com");
  });

  it("Should return role using getter", () => {
    const engineer = new Engineer("Dave", 1, "dave@gmail.com", "davesgithub");
    expect(engineer.role).toEqual("Engineer");
  });

  it("Should return github using getter", () => {
    const engineer = new Engineer("Dave", 1, "dave@gmail.com", "davesgithub");
    expect(engineer.gitHub).toEqual("davesgithub");
  });
});
