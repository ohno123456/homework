let http = require("http");
let url = require("url");
let ejs = require("ejs");

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
        ejs.renderFile("views/login_success.ejs", {username:pathStr}, function (error, data) {
            console.log(pathStr.query.username);
            res.end(data);
        });

    } else {
        res.end("error!");
    }


}).listen(8020);