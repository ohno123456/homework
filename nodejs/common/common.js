let http = require("http");
let config = require("./config");
let foo = require("foo");

// foo默认没有，则在node_modules里找到模块
// node_module 更深入路径则不能使用
// 而npm安装是直接引用的，需要在模块根目录，直接npm init --y
//let url = require("url");

http.createServer(function (req, res) {

    res.writeHead(200, { "Content-type": "text/html;charset = 'utf-8'" });
    // if (req.url != "/favicon.ico") {
    //     console.log(req.url);
    //     let result= url.parse(req.url, true);
    //     console.log(result.query.name);
    // }
    if (req.url != "/favicon.ico") {
        res.write("hello nodejs");
        console.log(req.url);
        console.log(config.str);
        console.log(foo.str);
        console.log(config.tools.add(1, 2));
        //采用supervisor监控文件的改变
        res.end();
    }

}).listen(8002, "127.0.0.1");
