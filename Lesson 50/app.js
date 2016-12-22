var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

// console.log(greet);

// asynchronous call
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
console.log(data);
});