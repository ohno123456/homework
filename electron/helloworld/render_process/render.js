const { BrowserWindow } = require("electron").remote;

const { ipcRenderer} = require("electron");

let btn = document.querySelector("#btn");

btn.onclick = function(){
  
    // 参数1：频道  参数2：数据
   ipcRenderer.send("msg-a","LY")

}

ipcRenderer.on("msg-b",function(event,msg){

    console.log("Render:",msg);

});

//渲染进程不能直接使用主进程的模块，可以使用remote调用
//ipcRenderer 模块用于渲染进程向主进程发送数据以及接受主进程返回的事件
//渲染进程向渲染进程发送数据，渲染-主进程-渲染
//不同渲染进程之间的数据共享，采用html5的api来实现