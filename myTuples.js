"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//this segment is only avilable in ts world and not in js world
var User = [1, "2"]; //now here we can put the array contents in any order
//but lets say you want to put it in a specific order
var User1;
User1 = ["ojasss", 131, true];
//tuple is there to make sure that even the order of insides of the array matters.
var rgb;
rgb = [255, 255, 255]; //this works
var newUser = [112, "oojas@google.com"];
newUser[1] = "ojas@best.com"; //you can change it
