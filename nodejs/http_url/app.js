let http = require("http");
let url = require("url");

http.createServer(function (req, res) {

    res.writeHead(200, { "Content-type": "text/html;charset = 'utf-8'" });
    if (req.url != "/favicon.ico") {
        console.log(req.url);
        let result= url.parse(req.url, true);
        console.log(result.query.name);
    }
    res.write("hello nodejs123");
    //采用supervisor监控文件的改变
    res.end();
}).listen(8080);

