//when you are not sure what type of data is going to come in it might be a nuber it might be a string
//instead of using any its highly recommened to use Union


let score: number | string | boolean = 33
//it is recommended to keep it as strict as possible

type User = {
    name: string;
    id : number
}
type Admin = {
    username: string;
    id : number
}
let ojas : User | Admin = {name: "hitesh", id : 24}
// oojas (the user can also be an admin) 

ojas = {username : "ojassss", id : 241}


// function getDBid(id : number | string){
//     //making some API calls
//     console.log(`DB id is ${id}`);
// }
//okay this works but u know what does'nt?

getDBid(3)
getDBid("3")

function getDBid(id : number | string){
    // id.toLowerCase() 
    // now why this does'nt work when it can either be a string or a number
    //the thing is its not treating it as either just as a string or just as a number it is treating it as 
    //data type which could eventually end up as a number or a string so u need to verify

    if (typeof id == "string") {
        id.toLowerCase();
    }
}



//array

const data : number[] = [1,2,3,4]
const data2 : string[] = ["1","2","3","4"]
// const data3 : string[] | number[] = ["1","2","3",4 ].  // its a mistake
//as it says that it can either be a string array or a number array

//to make it work
const data3 : (string | number)[] = ["1",2,"3",4 ] // now it works


//for literal type of assignment
let pi:3.14 = 3.14 
// pi = 3.145 // will give an error 


let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle" //this works
// seatAllotment = "crew"  //this does'nt work