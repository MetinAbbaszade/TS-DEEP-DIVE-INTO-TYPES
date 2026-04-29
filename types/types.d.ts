export type Person = {
    name: string;
};
export type Admin = Person & {
    privileges: Array<string>;
};
export type Employee = Person & {
    startDate: Date;
};
export type ElevatedEmployee = Admin & Employee;
export declare function createElevatedEmployee({ name, privileges, startDate, }: ElevatedEmployee): ElevatedEmployee;
export type User = Admin | Employee;
export declare function merge<T, U>(name: T, age: U): {
    name: T;
    age: U;
};
export declare function isAdmin(user: User): user is Admin;
//# sourceMappingURL=types.d.ts.map