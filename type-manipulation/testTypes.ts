import type { _isString, makeOptional } from "./typeManipulation";

const _checkString: _isString<"string"> = true;
const _checkNumber: _isString<10> = false;

type Person = {
	name: string;
	age: number;
	email: string;
};

const _OptionalPerson: makeOptional<Person> = {
	name: "optional person",
};

const _selectedPerson: Pick<Person, "name" | "age"> = {
	name: "selected",
	age: 10,
};

console.log(_selectedPerson.age);
console.log(_OptionalPerson.email);
console.log(_checkString);
console.log(_checkNumber);
