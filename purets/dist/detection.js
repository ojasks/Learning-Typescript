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
//# sourceMappingURL=detection.js.map