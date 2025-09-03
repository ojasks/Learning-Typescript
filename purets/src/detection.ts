function detectTypes(val : number | string){
    // return val.toLowerCase() //this wont work cause till now theres no guarantee what is the type of datatype
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val+3
}


function provideId(id : string | null ){
    if(!id){
        console.log("Please Enter a Valid ID");
        return
    }
    id.toLowerCase()

}

//type of (type guards)

function printString(strs : string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for (const s of strs){
                console.log(s);
            }
        }
        else if (typeof strs === "string"){
            console.log(strs);
        }
    }
}