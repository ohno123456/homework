const {app,BrowserWindow,ipcMain} = require("electron");
//path 是node的一个内置模块
path = require("path");
//在主进程里设置全程变量
global.shareObject = {
name:"LiuYu"
}
let win;
app.on("ready",ly_createWindow);
function ly_createWindow(){

    win = new BrowserWindow({
        width: 300*2,
        height: 300,
        movable:true,
        resizable:true,
        webPreferences: {
            nodeIntegration: true
        }  //electron 5.0之后该参数默认值是false，
    });
     win.loadURL(path.join(__dirname,"./index.html"));
     win.webContents.openDevTools();
//引入菜单文件
require("./menu.js");
//在主进程里打印的数据在终端控制台打印，渲染进程打印的数据在页面控制台显示
ipcMain.on("msg-a",function(event,msg){
    console.log("Main:",msg)
    //1 方法1
    //  event.sender.send("msg-b","LY");
    // //2 方法2
    win.webContents.send("msg-b","LY");

});//渲染进程往主进程发送信息

}