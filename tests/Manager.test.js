const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("instantiation", () => {
    it("should pass and instantiate an object correctly ", () => {
      // Arrange
      let testManager = new Manager(
        "Thomas",
        2,
        "ThomasWhite@gmail.com",
        "Manager",
        "1900"
      );
      // Act
      // Assert
      expect(testManager.name).toEqual("Thomas");
      expect(testManager.id).toEqual(2);
      expect(testManager.email).toEqual("ThomasWhite@gmail.com");
      expect(testManager.role).toEqual("Manager");
      expect(testManager.officeNumber).toEqual("1900");
    });
  });

  describe("get role", () => {
    it("should return the Manager role correctly", () => {
      // Arrange
      let testManager = new Manager(
        "Thomas",
        2,
        "ThomasWhite@gmail.com",
        "Manager",
        "1900"
      );
      // Act
      let role = testManager.getRole();
      // Assert
      expect(role).toEqual("Manager");
    });
  });

  describe("get officeNumber", () => {
    it("should return office number correctly ", () => {
      // Arrange
      let testManager = new Manager(
        "Thomas",
        2,
        "ThomasWhite@gmail.com",
        "Manager",
        "1900"
      );
      // Act
      let officeNumber = testManager.getOfficeNumber();
      // Assert
      expect(officeNumber).toEqual("1900");
    });
  });
});
