class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getEmail() {
    return this.email;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
