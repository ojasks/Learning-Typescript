abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    abstract getSepia(): void 
    //it says that the function implementation is missing, can be removed by writing the abstract keyword
    getReelTime(): number{
        // some complex calculation;
        return 8;
    }
}

// const ojass = new TakePhoto("vivid", "paris")  // not valid


//the moment you declare the above class as abstract no new object can be created from this class
//in abstract classes these are exactly like blueprint

//Abstract classes are just like interface they just differ in
//abstract classes are exactly the blueprint, u cannot create a object from it its the responsibility of the class whos extending it
//u can create object from the class that is inheriting it


class Instagram extends TakePhoto{
     constructor(
        public cameraMode: string,
        public filter: string,
        public burst : number //not following the blueprint of abstract class for this use "super"
    ){
        super(cameraMode, filter) //u need to pass all the required values in the super
    }
    getSepia(): void {
        console.log("Sepia");
    }
}
const ojass = new Instagram("vivid", "paris",3) 

// till here this is the first difference

//we also saw that in interfaces we can create method definitons
//in same way we can create methods for which we dont have to provide a definition and they need to be declared in the class whos's inheriting it as a must


//so now a thought comes to our mind that in interfaces too u were able to define these methods
//so whats the use of abstract classes


// *****************************
// to summarize

//abstract classes cannot create their objects on their own
//but they help to define the class who are inheritng them
// if u want to put some compulsory methods (that the child has to inherit) use the keyword abstract with them
//u can also give them some features by default
// the child classes can ignore the default methods as well passed by the abstract parent class

