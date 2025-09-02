const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}
//not a good way , how many OR's are going to use

function identityTwo(val: any): any {
    return val;
}
//ts still has no idea about the datatype

function identityThree<Type>(val: Type): Type{
    return val;
}
//almost like "any" , it takes any datatype as input and logs it 
// so if u give number as input then it gives output as number too
// basically the return type automatically becomes a number

function identityFour<T>(val: T): T{
    return val;
}
//use the same reference letter or alphabet that is used once



identityThree("3")


interface Bottle{
    brand: string,
    type: number
}

const result = identityFour<Bottle>({ brand: "ojasss", type: 24 });
//so yeah generics really solve a great deal and are reusable
