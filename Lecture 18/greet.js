var greet = function() {
    console.log("Hello");
};

var sayHi = function() {
    console.log("hi");
};

// make available outside of module
module.exports = greet;
module.exports = sayHi;