// const AISLE = 0
// const WINDOW =2
// const MIDDLE =1
//WHEN U HAVE MULTIPLE CHOICES PREFER ENUMS
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 3] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
//by default the first value is assigned 0
// and the subsequent values are incremented by 1
//you can also assign them values like assign aisle =10 then the subsequent values will be 11->12->13 etc
//and u can also assign different values to each if u dont wanna go subsequent
//if u break the pattern and assign AISLE = "AISLE" then u would have to assign value for each
//cause u are'nt assigning numerical values now
// or u can assign other some numerical values as u want
//when u have too much of crazy code for a give ts code use const with it too
var ojasSeat = SeatChoice.WINDOW;
//after . all the choices are available, this makes our code a little bit more reliable
