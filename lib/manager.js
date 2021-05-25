// Creating Manager Class
const Employee = require("./employee.js");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this._officeNumber = officeNumber;
    this._role = "Manager";
  }
  get officeNumber() {
    return this._officeNumber;
  }
  get role() {
    return this._role;
  }
}
module.exports = Manager;
