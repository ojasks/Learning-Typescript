//when you are not sure what type of data is going to come in it might be a nuber it might be a string
//instead of using any its highly recommened to use Union
var score = 33;
var ojas = { name: "hitesh", id: 24 };
// oojas (the user can also be an admin) 
ojas = { username: "ojassss", id: 241 };
// function getDBid(id : number | string){
//     //making some API calls
//     console.log(`DB id is ${id}`);
// }
//okay this works but u know what does'nt?
getDBid(3);
getDBid("3");
function getDBid(id) {
    // id.toLowerCase() 
    // now why this does'nt work when it can either be a string or a number
    //the thing is its not treating it as either just as a string or just as a number it is treating it as 
    //data type which could eventually end up as a number or a string so u need to verify
    if (typeof id == "string") {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
// const data3 : string[] | number[] = ["1","2","3",4 ].  // its a mistake
//as it says that it can either be a string array or a number array
//to make it work
var data3 = ["1", 2, "3", 4]; // now it works
//for literal type of assignment
var pi = 3.14;
// pi = 3.145 // will give an error 
var seatAllotment;
seatAllotment = "aisle"; //this works
// seatAllotment = "crew"  //this does'nt work
