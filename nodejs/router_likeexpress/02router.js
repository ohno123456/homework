let http = require("http");
let url = require("url");
let model = require("./model/model.js");

http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname.replace('/', '');
    if (pathname != "favicon.ico") {
        try{
          model.router[pathname](req, res);  
        }catch(err){

            model.router["home"](req,res);
        }
        
    }
}).listen(8020);