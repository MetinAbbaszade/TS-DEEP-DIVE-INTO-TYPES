type IPerson = {
	getFullName: () => void;
};

class Person implements IPerson {
	private firstname: string;
	private lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstname = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return `${this.firstname} ${this.lastName}`;
	}
}

class Student extends Person implements IPerson {
	grade: number;
	constructor(firstName: string, lastName: string, grade: number) {
		super(firstName, lastName);
		this.grade = grade;
	}

	getStudentInfo() {
		return `${this.getFullName()} - Grade: ${this.grade}`;
	}
}

const people: IPerson[] = [
	new Person("John", "Doe"),
	new Student("Metin", "Aliyev", 90),
];

people.forEach((person) => {
	console.log(person.getFullName());
});

export { type IPerson, Person, Student };
