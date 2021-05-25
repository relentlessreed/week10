// Creating Engineer Class
const Employee = require("./employee.js");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this._github = github;
    this._role = "Engineer";
  }
  get gitHub() {
    return this._github;
  }
  get role() {
    return this._role;
  }
}
module.exports = Engineer;
