let http = require("http");
let url = require("url");
let ejs = require("ejs");

http.createServer(function(req,res){
 let pathname = url.parse(req.url).pathname;
 let msg = "@Liuyu";
 let reg = "这是注册页面";
 let list = [
     "111",
     "222",
     "333"
 ];
 let h = "<i>this is a html markdown</i>";
 res.writeHead(200,{"ContentType":"text/html;charset = 'utf-8'"});
 if(pathname == "/login"){
     ejs.renderFile("views/index.ejs",{
         msg:msg,
         list:list
        },
        function(err,data){  
        res.end(data);
     });
 }else{
    ejs.renderFile("views/reg.ejs",{
        reg:reg,
        h:h
       },
       function(err,data){  
       res.end(data);
    });
 }


}).listen(8020);