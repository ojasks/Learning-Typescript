//interface is a basic overview of these are the fields which are compulsory
//can be said it is a loose form of class

interface User{
    readonly dbId: number,
    email : string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}
//similar to types
//when not compulsory use a question mark
//for function they return what kind of data they are going to return

interface User{
    githubToken: string
}
//can again add to the same interface aka reopening of the interface.

//interface also has inheritance
interface Admin extends User {
    role: "admin" | "ta" | "learner"

}


//here OJas can be user as well as Admin, just in the case of admin you gotta add role too
const OJas: User = {
    dbId : 2211,
    email: "ojas@google.com" ,
    userId: 24,
    githubToken: "gihtub",
    startTrail: ()=> {
        return "trail started"
    },
    getCoupon: (name: "ojasbeast", off: 90) => {
        return 90
    }
}

OJas.email = "ojas@uber.com"
// OJas.dbID = 1112.  // cant change readonly variables


// whats the type difference between type aliases and interface
// extending 