function greet(callback, d) {
    console.log();
    console.log('greet function invoked Hello! ' + d.name);
    callback(d);
}

me = {
    name: 'David',
    age: 45
}

her = {
    name: 'Rachel',
    age: 7
}

greet(function (data) {
    console.log('The callback was invoked');
    console.log(data);
}, me);

greet( function (data) {
    console.log('A different callback was invoked!');
    console.log(data.name);
}, her);
