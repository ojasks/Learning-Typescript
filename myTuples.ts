//this segment is only avilable in ts world and not in js world
const User:  (string | number)[] = [1 , "2"] //now here we can put the array contents in any order

//but lets say you want to put it in a specific order

let User1: [string, number, boolean] 
User1 = ["ojasss" , 131, true]

//tuple is there to make sure that even the order of insides of the array matters.

let rgb: [number, number, number]
rgb = [255, 255, 255] //this works
// rgb = [255, 255, 255, 0.5] //this would'nt work


type User3 = [number , string]
const newUser: User3 = [112, "oojas@google.com"]  

newUser[1] = "ojas@best.com" //you can change it
// newUser.push(true) //this doen'st work
 

export{}