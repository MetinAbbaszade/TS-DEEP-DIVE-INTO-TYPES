// Define two types:
// Admin: A type representing a user with administrative privileges. It should have properties like name (string) and privileges (string array).
// Employee: A type representing a regular employee. It should have properties like name (string) and startDate (Date).
export type Person = { name: string };

export type Admin = Person & {
	privileges: Array<string>;
};

export type Employee = Person & {
	startDate: Date;
};

// -----
//Define an ElevatedEmployee type that combines the Admin and Employee types using Intersection types.
export type ElevatedEmployee = Admin & Employee;

// -----
// Implement a function named createElevatedEmployee:
// Parameters: It should take name, privileges, and startDate as parameters.
// Returns: It should return an object of type ElevatedEmployee combining the properties from both Admin and Employee.
export function createElevatedEmployee({
	name,
	privileges,
	startDate,
}: ElevatedEmployee): ElevatedEmployee {
	return {
		name,
		privileges,
		startDate,
	};
}

//Define a User type using a Union of Admin and Employee. This type should represent either an Admin or an Employee.
export type User = Admin | Employee;

// In the same types.ts file, define a generic function named merge that takes two parameters of different types and returns a new object combining both.
// Use this function to merge objects of various types, showcasing the flexibility of Generics in TypeScript.
export function merge<T, U>(name: T, age: U): { name: T; age: U } {
	return { name, age };
}
const newObj1 = merge("Metin", 10);
const newObj2 = merge(true, "Matin");



// This function should accept a User type and return a boolean indicating whether the user is an Admin.
// Use the type guard function in another function that handles User types, demonstrating how to safely differentiate between Admin and Employee types.
export function isAdmin(user: User): user is Admin {
  return "privileges" in user;
}