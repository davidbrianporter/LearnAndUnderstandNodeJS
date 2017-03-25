var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16*1024 });

var writeable = fs.createWriteStream(__dirname + '/greetcopy.txt', { encoding: 'utf8', highWaterMark: 16*1024 });

readable.on('data', function(chunk) {
    console.log(chunk);
    writeable.write(chunk);



function fu(cb) {
    console.log("called in fu");

    cb();
}

fu(callback);

function callback() {
    console.log("hi david");
}



});

