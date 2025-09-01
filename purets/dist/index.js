"use strict";
// console.log("typescript is here still"); 
// console.log("typescript is amazing"); 
Object.defineProperty(exports, "__esModule", { value: true });
// class User {
//     public email: string
//     name: string
//     private readonly city : string = "bangalore"
//     constructor(email : string,name: string){
//         this.email = email;
//         this.name = name
//     }
// }
// we have to initialize the constructor as we are not taking it in the constructor
// now its your choice to either use it in constructor or initialize way back
// most of the professional people who write code dont do it the above way
class User {
    email;
    name;
    city = "bangalore";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const ojasss = new User("ojas@google.com", "ojasss");
// ojasss.city = "bangalore"
// if u want the city to be not changed make it readonly
//suppose u dont want the city to be set u use readonly
//but still the city can be accessed for that
// u use private
//things which are not marked anything are automatically marked public 
//if u wanna make it inaccessible without using the private keyword
// u can just put a hash before it -> this is classic js
// # is a js word , private is a ts word
//# sourceMappingURL=index.js.map