let http = require("http");
let url = require("url");
let ejs = require("ejs");
var querystring = require('querystring');

http.createServer(function (req, res) {
    let pathStr = url.parse(req.url,true);
    let pathname = pathStr.pathname;
    let postmethod = req.method;
    res.writeHead(200, {
        "ContentType": "text/html;charset=utf-8"
    });
    if (pathname == "/login") {
        ejs.renderFile("views/login.ejs", {}, function (error, data) {
            res.end(data);
        });
    } else if (pathname == "/dologin" && postmethod == "POST") {
        let postStr = "";
        req.on("data",function(chunk){
        postStr += chunk;
        });
        req.on("end",function(err,chunk){
            console.log(postStr);
            ejs.renderFile("views/login_success.ejs", {username:querystring.parse(postStr).username}, function (error, data) {
                res.end(data);
            });

        });
       

    } else {
        res.end("error!");
    }


}).listen(8020);