"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello" //andar-se
}
// now it is supposed to return number
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
//what if u have to return more than one case? 
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spiderman", "ironman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
addTwo(5); //baharse
getUpper("ojas");
signUpUser("ojasksksks", "ojasks@gmail.com", true);
loginUser("oj", "oj@j.com");
