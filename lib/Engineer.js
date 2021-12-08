const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, role, githubUserName) {
    super(name, id, email);
    this.githubUserName = githubUserName;
    this.role = role;
  }

  getGithubUserName() {
    return this.githubUserName;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
