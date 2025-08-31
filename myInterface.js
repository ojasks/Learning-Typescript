//interface is a basic overview of these are the fields which are compulsory
//can be said it is a loose form of class
//here OJas can be user as well as Admin, just in the case of admin you gotta add role too
var OJas = {
    dbId: 2211,
    email: "ojas@google.com",
    userId: 24,
    githubToken: "gihtub",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 90;
    }
};
OJas.email = "ojas@uber.com";
// OJas.dbID = 1112.  // cant change readonly variables
// whats the type difference between type aliases and interface
// extending 
