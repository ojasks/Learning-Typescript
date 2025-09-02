// console.log("typescript is here still"); 
// console.log("typescript is amazing"); 

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

    protected _courseCount = 1;

    readonly city : string = "bangalore"
    constructor(
        public email : string,
         public name: string,
        //  private userId : string
        ){
    
    }
    private deleteToken() {
        console.log("Token deleted")
    }
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    set courseCount(courseNum: number){
        if (courseNum <=1) {
            throw new Error("Course Count should be more than 1")
        }
        this._courseCount = courseNum
    }
}


class SubUser extends User {
    // this does not have access to private properties of User
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4 //cant change it as it is private and would require to be changed to protected in USer
    }
}





const ojasss = new User("ojas@google.com","ojasss")
// ojasss.city = "bangalore"
// if u want the city to be not changed make it readonly

//suppose u dont want the city to be set u use readonly
//but still the city can be accessed for that
// u use private

//things which are not marked anything are automatically marked public 

//if u wanna make it inaccessible without using the private keyword
// u can just put a hash before it -> this is classic js

// # is a js word , private is a ts word

// ojasss.deleteToken() // not allowed as it is a private property

// a set accessor can not have a return type annotation

