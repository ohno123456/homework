let fs = require("fs");
let readFile = fs.createReadStream("input.txt");
let str = "";
readFile.on("data", function (chunk) {
    str += chunk;
});

readFile.on("end", function (chunk) {
    console.log(str);
});

readFile.on("error", function (err) {
    console.log(err);
});
