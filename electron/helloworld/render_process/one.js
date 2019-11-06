const remote = require("electron").remote;
let btn1 = document.querySelector("#btn1");

btn1.onclick = function(){
    console.log("已经改变了");
    remote.getGlobal("shareObject").name = "Liuyu124";
}