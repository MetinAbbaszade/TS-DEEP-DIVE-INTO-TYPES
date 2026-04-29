"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElevatedEmployee = createElevatedEmployee;
exports.merge = merge;
exports.isAdmin = isAdmin;
// -----
// Implement a function named createElevatedEmployee:
// Parameters: It should take name, privileges, and startDate as parameters.
// Returns: It should return an object of type ElevatedEmployee combining the properties from both Admin and Employee.
function createElevatedEmployee({ name, privileges, startDate, }) {
    return {
        name,
        privileges,
        startDate,
    };
}
// In the same types.ts file, define a generic function named merge that takes two parameters of different types and returns a new object combining both.
// Use this function to merge objects of various types, showcasing the flexibility of Generics in TypeScript.
function merge(name, age) {
    return { name, age };
}
const newObj1 = merge("Metin", 10);
const newObj2 = merge(true, "Matin");
// This function should accept a User type and return a boolean indicating whether the user is an Admin.
// Use the type guard function in another function that handles User types, demonstrating how to safely differentiate between Admin and Employee types.
function isAdmin(user) {
    return "privileges" in user;
}
//# sourceMappingURL=types.js.map