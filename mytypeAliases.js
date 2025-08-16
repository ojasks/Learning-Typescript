"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type myString = string;  if you wanna rename it
//the user should adher to the type of user, the return type should be also User
function createUser(user) {
    return ({ name: "", email: " ", isActive: true });
}
// a type alias is a name for any type
createUser({ name: "", email: "", isActive: true });
