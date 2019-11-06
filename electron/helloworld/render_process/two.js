const remote = require("electron").remote;
let btn2 = document.querySelector("#btn2");

btn2.onclick = function(){
   
    let res = remote.getGlobal("shareObject").name;
    console.log(res);
}