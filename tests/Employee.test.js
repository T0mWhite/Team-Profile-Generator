const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("instantiation", () => {
    it("should pass and instantiate an object correctly ", () => {
      // Arrange
      let testEmployee = new Employee("Thomas", 2, "ThomasWhite@gmail.com", "Employee");
      // Act
      // Assert
      expect(testEmployee.name).toEqual("Thomas");
      expect(testEmployee.id).toEqual(2);
      expect(testEmployee.email).toEqual("ThomasWhite@gmail.com");
      expect(testEmployee.role).toEqual("Employee");
    });
  });

  describe("get email", () => {
    it("should return email correctly ", () => {
      // Arrange
      let testEmployee = new Employee("Thomas", 2, "ThomasWhite@gmail.com");
      // Act
      let email = testEmployee.getEmail();
      // Assert
      expect(email).toEqual("ThomasWhite@gmail.com");
    });
  });

  describe("get id", () => {
    it("should return employee id correctly", () => {
      // Arrange
      let testEmployee = new Employee("Thomas", 2, "ThomasWhite@gmail.com");
      // Act
      let id = testEmployee.getId();
      // Assert
      expect(id).toEqual(2);
    });
  });

  describe("get name", () => {
    it("should return the employees name correctly", () => {
      // Arrange
      let testEmployee = new Employee("Thomas", 2, "ThomasWhite@gmail.com");
      // Act
      let name = testEmployee.getName();
      // Assert
      expect(name).toEqual("Thomas");
    });
  });

  describe("get role", () => {
    it("should return the employees role correctly", () => {
      // Arrange
      let testEmployee = new Employee("Thomas", 2, "ThomasWhite@gmail.com");
      // Act
      let role = testEmployee.getRole();
      // Assert
      expect(role).toEqual("Employee");
    });
  });
});
