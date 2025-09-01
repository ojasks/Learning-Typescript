// console.log("typescript is here still"); 
// console.log("typescript is amazing"); 

class User {
    email: string
    name: string
    readonly city : string = "bangalore"
    constructor(email : string,name: string){
        this.email = email;
        this.name = name
    }
}
// we have to initialize the constructor as we are not taking it in the constructor
// now its your choice to either use it in constructor or initialize way back

const ojasss = new User("ojas@google.com","ojasss")
// ojasss.city = "bangalore"
// if u want the city to be not changed make it readonly