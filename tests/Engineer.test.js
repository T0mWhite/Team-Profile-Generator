const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("instantiation", () => {
    it("should pass and instantiate an object correctly ", () => {
      // Arrange
      let testEngineer = new Engineer(
        "Thomas",
        2,
        "ThomasWhite@gmail.com",
        "Engineer",
        "T0mWhite"
      );
      // Act
      // Assert
      expect(testEngineer.name).toEqual("Thomas");
      expect(testEngineer.id).toEqual(2);
      expect(testEngineer.email).toEqual("ThomasWhite@gmail.com");
      expect(testEngineer.role).toEqual("Engineer");
      expect(testEngineer.githubUserName).toEqual("T0mWhite");
    });
  });

  describe("get role", () => {
    it("should return the Engineer role correctly", () => {
      // Arrange
      let testEngineer = new Engineer(
        "Thomas",
        2,
        "ThomasWhite@gmail.com",
        "Engineer",
        "T0mWhite"
      );
      // Act
      let role = testEngineer.getRole();
      // Assert
      expect(role).toEqual("Engineer");
    });
  });

  describe("get githubUserName", () => {
    it("should return the user's github username correctly ", () => {
      // Arrange
      let testEngineer = new Engineer(
        "Thomas",
        2,
        "ThomasWhite@gmail.com",
        "Engineer",
        "T0mWhite"
      );
      // Act
      let githubUserName = testEngineer.getGithubUserName();
      // Assert
      expect(githubUserName).toEqual("T0mWhite");
    });
  });
});