var fs = require("fs");

//Asynchoronous - Opening File
console.log("Going to open file !");
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) {
        return console.error(err);
    }
});