"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectTypes(val) {
    // return val.toLowerCase() //this wont work cause till now theres no guarantee what is the type of datatype
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please Enter a Valid ID");
        return;
    }
    id.toLowerCase();
}
//type of (type guards)
function printString(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// understand the importance of "in" keyword it confirms the interface
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//this function is to find if the account is of admin
// return account.isAdmin wont work as we are not sure that the account is 100%  of admin
//the "in" operator helps u to narrow down which operator it is 
//# sourceMappingURL=detection.js.map