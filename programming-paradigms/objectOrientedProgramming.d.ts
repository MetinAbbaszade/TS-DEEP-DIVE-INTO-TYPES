type IPerson = {
    getFullName: () => void;
};
declare class Person implements IPerson {
    private firstname;
    private lastName;
    constructor(firstName: string, lastName: string);
    getFullName(): string;
}
declare class Student extends Person implements IPerson {
    grade: number;
    constructor(firstName: string, lastName: string, grade: number);
    getStudentInfo(): string;
}
export { type IPerson, Person, Student };
//# sourceMappingURL=objectOrientedProgramming.d.ts.map