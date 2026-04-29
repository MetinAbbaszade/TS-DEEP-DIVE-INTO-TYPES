"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create another file named enumsAndTuples.ts.
// Define an enum named Role representing different user roles (e.g., ADMIN, READ_ONLY, AUTHOR).
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const UserData = ["Metin", Role.ADMIN, new Date()];
// Write a function that creates and prints user data using the UserData tuple.
function CreateUserData(username, role, create_date) {
    const newUser = [username, role, create_date];
    for (const item of newUser) {
        console.log(item);
    }
    return newUser;
}
const user = CreateUserData("Metin", Role.ADMIN, new Date());
//# sourceMappingURL=enumsAndTuples.js.map