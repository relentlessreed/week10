// Creating Intern Class
const Employee = require("./employee.js");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this._school = school;
    this._role = "Intern";
  }
  get school() {
    return this._school;
  }

  get role() {
    return this._role;
  }
}
module.exports = Intern;
