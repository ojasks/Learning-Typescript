function addTwo(num : number): number{
    return num + 2 
    // return "hello" //andar-se
}
// now it is supposed to return number
function getUpper(val : string){
    return val.toUpperCase();
}

function signUpUser(name:String, email: String, isPaid:boolean)
{}

let loginUser = (name:String, email: String, isPaid:boolean = false) => {}

//what if u have to return more than one case? 
const getHello = (s: string): string => {
    return ""
}

const heroes = ["thor", "spiderman" ,"ironman"]
heroes.map(hero => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}



addTwo(5); //baharse
getUpper("ojas");
signUpUser("ojasksksks","ojasks@gmail.com",true);
loginUser("oj","oj@j.com");

export{}