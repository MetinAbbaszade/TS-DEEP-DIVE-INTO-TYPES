"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
class Person {
    firstname;
    lastName;
    constructor(firstName, lastName) {
        this.firstname = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstname} ${this.lastName}`;
    }
}
exports.Person = Person;
class Student extends Person {
    grade;
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.grade = grade;
    }
    getStudentInfo() {
        return `${this.getFullName()} - Grade: ${this.grade}`;
    }
}
exports.Student = Student;
const people = [
    new Person("John", "Doe"),
    new Student("Metin", "Aliyev", 90),
];
people.forEach((person) => {
    console.log(person.getFullName());
});
//# sourceMappingURL=objectOrientedProgramming.js.map