const Employee = require("../lib/Employee");





describe('Employee', () => {
    describe('instantiation', () => {
        it('should pass and instantiate an object correctly ', () => {
            // Arrange
            let testEmployee = new Employee("Jason", 1, "JasonDay@gmail.com");
            // Act
            // Assert
            expect(testEmployee.name).toEqual("Jason");
            expect(testEmployee.id).toEqual(1);
            expect(testEmployee.email).toEqual("JasonDay@gmail.com");
            
        });
    });
    
    describe('get email', () => {
        it('should return email correctly ', () => {
            // Arrange
            let testEmployee = new Employee("Jason", 1, "JasonDay@gmail.com");
            // Act
            let email = testEmployee.getEmail();
            // Assert
            expect(email).toEqual("JasonDay@gmail.com");

        });
    });
    
    describe('get id', () => {
        it('should ', () => {
            // Arrange
            // Act
            // Assert
            
        });
    });
    
    describe('get name', () => {
        it('should ', () => {
            // Arrange
            // Act
            // Assert
            
        });
    });
    
    describe('get role', () => {
        it('should ', () => {
            // Arrange
            // Act
            // Assert
            
        });
    });
});