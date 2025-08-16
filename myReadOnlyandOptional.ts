type User = {
    readonly _id: string
    name :string
    email :string
    isActive: boolean
    creditDetails ?:number // and as we want to keep it optional use a question mark, otherwise error
}
//to mark as optional use a question mark 
let myUser: User = {
     _id: "12345",
    name :"ojasss",
    email :"ojasss@best.com",
    isActive: false 
}
myUser.email = "ojass@faaang.com"
// myUser._id = "12345" // thi will not be allowed as it is readonly

type cardNumber = {
    cardNumber : string
}
type cardDate = {
    cardDate : string
}
type cardDetails = cardDate & cardNumber & {
    cvv : number
}