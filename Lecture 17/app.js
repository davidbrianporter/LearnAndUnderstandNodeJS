// function statement
function greet() {
    console.log('hi');
}
greet();

// functions are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi David');
}
greetMe();

// greetMe is first-class
logGreeting(greetMe);

//create a function as a function argument (method parameter)
logGreeting(function() {
    console.log('hey, hey, hey')
});