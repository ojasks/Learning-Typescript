"use strict";
// The Problem Generics Solve
// In TypeScript, when you write functions or classes, you often want them to work with different types, but still keep type safety.
// If you don’t use generics, you usually fall back to any:
//This works, but TypeScript won’t catch errors:
// Enter Generics
//Generics let you write reusable code that works with any type, while preserving type information.
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
function getSearchProducts(products) {
    //do some complex calculations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
};
// <T,> this comma is put so that to denote that this sis not a jsx syntax but the generic tag
//# sourceMappingURL=myGenerics.js.map