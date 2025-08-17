// const superHeroes = []

// superHeroes.push("spiderman")// argument of type string is not assignable to type never

// const superHeroes: [] = [] //u have defined an an array which will always be empty

const superHeroes: string[] = []
// const heroPower: number[] = []  // this works another way to write it is 
const heroPower: Array<number> = [] 

superHeroes.push("spiderman") //now it works
heroPower.push(2) //now it works


type User = {
    name: string
    isActive: Boolean
}
const allUsers: User[] = []
allUsers.push({name : "", isActive: true}) //needs to follow the format

const MLModels: number [][] = [ // can have inside only array in array
    [255,255,255],
    []
]