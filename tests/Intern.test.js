const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("instantiation", () => {
    it("should pass and instantiate an object correctly ", () => {
      // Arrange
      let testIntern = new Intern(
        "Thomas",
        2,
        "ThomasWhite@gmail.com",
        "Intern",
        "TAMU"
      );
      // Act
      // Assert
      expect(testIntern.name).toEqual("Thomas");
      expect(testIntern.id).toEqual(2);
      expect(testIntern.email).toEqual("ThomasWhite@gmail.com");
      expect(testIntern.role).toEqual("Intern");
      expect(testIntern.school).toEqual("TAMU");
    });
  });

  describe("get role", () => {
    it("should return the Intern role correctly", () => {
      // Arrange
      let testIntern = new Intern(
        "Thomas",
        2,
        "ThomasWhite@gmail.com",
        "Intern",
        "TAMU"
      );
      // Act
      let role = testIntern.getRole();
      // Assert
      expect(role).toEqual("Intern");
    });
  });

  describe("get school", () => {
    it("should return the user's school correctly ", () => {
      // Arrange
      let testIntern = new Intern(
        "Thomas",
        2,
        "ThomasWhite@gmail.com",
        "Intern",
        "TAMU"
      );
      // Act
      let school = testIntern.getSchool();
      // Assert
      expect(school).toEqual("TAMU");
    });
  });
});