// Create another file named enumsAndTuples.ts.
// Define an enum named Role representing different user roles (e.g., ADMIN, READ_ONLY, AUTHOR).
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

// Define a UserData tuple that combines a string (for the username), a Role (from the enum), and a Date (for the account creation date).
type IUser = [string, Role, Date];
const UserData: IUser = ["Metin", Role.ADMIN, new Date()];

// Write a function that creates and prints user data using the UserData tuple.

function CreateUserData(
	username: string,
	role: Role,
	create_date: Date,
): IUser {
	const newUser: IUser = [username, role, create_date];
	for (const item of newUser) {
		console.log(item);
	}
	return newUser;
}

const user = CreateUserData("Metin", Role.ADMIN, new Date());
