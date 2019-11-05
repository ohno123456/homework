let fs = require("fs");

fs.stat("common",function(err,stat){
    if(err){
    console.log("目录：true");
    }else{
   console.log("文件：true");
    }

});