"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "ojas",
    email: "ojas@best.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser() // will give me error as have not passed object inside it
createUser({ name: "ojas", isPaid: false });
function createCourse() {
    return { name: "ojasss", Price: 24200 };
}
//when an object returns an object
//now where does the bad behaviour of objects comes up // where normally we should have not been allowed to add email to it as the input parameters were already defined
var newUser = ({ name: "ojas", isPaid: false, email: "ojas@best.com" });
createUser(newUser);
