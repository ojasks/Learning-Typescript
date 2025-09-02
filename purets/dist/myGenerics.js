"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
//not a good way , how many OR's are going to use
function identityTwo(val) {
    return val;
}
//ts still has no idea about the datatype
function identityThree(val) {
    return val;
}
//almost like "any" , it takes any datatype as input and logs it 
// so if u give number as input then it gives output as number too
// basically the return type automatically becomes a number
function identityFour(val) {
    return val;
}
//use the same reference letter or alphabet that is used once
identityThree("3");
const result = identityFour({ brand: "ojasss", type: 24 });
//so yeah generics really solve a great deal and are reusable
//# sourceMappingURL=myGenerics.js.map