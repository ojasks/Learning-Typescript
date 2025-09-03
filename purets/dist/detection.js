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
//typeof checks u for a default type
//instanceof checks u whether this object was instance of some class  
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
//just like we have interface we have type
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // here ts is still confused whether this is a fish or a bird cause the above method "isFish"
        //is truly non behaving as it returns just a boolean value so what we do is type cast the output for the boolean decision
        // if the above "isFish" evaluates to true then the output for true will be  
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //else i am sure its a square
    // return shape.side * shape.side; // on adding reactnagle to the shapes it becomes unsure as it can be square as well as rectangle
}
/// coming to the never type and exhaustive check
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
        // so now this is yelling that wea are missing something that is a check case
        //which was otherwise mi ssing 
    }
}
// lets say we have many more cases here then its the called "exhaustive checking" here
// okay what if now reactangle ws also introduced int the shapes 
//in the same way in payment gateways another step was introduced as authorization as well
// so how would u have added it
//then what happens 
//the "getTrueShape" function starts falling apart
//and also should'nt there be another case that we should be checking
//for this we should hhave a default case of the type "never" onto whatever shape(here) u are defining on
//and that should be returned 
//# sourceMappingURL=detection.js.map