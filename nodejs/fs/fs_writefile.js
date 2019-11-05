let fs = require("fs");
let writeFile = fs.createWriteStream("onput.txt");
let str = "123456";
writeFile.write(str,"utf-8");

writeFile.end();
writeFile.on("finish", function (chunk) {
    console.log("写入完成");
});

writeFile.on("error", function (err) {
    console.log(err);
});
