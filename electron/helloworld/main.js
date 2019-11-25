const {app,BrowserWindow,ipcMain} = require("electron");
//path 是node的一个内置模块
path = require("path");
//在主进程里设置全程变量
global.shareObject = {
name:"LiuYu"
}
let pluginName;
switch (process.platform) {
  case 'win32':
    pluginName = '/lib/pepflashplayer32.dll'
    break
  case 'win64':
    pluginName = '/lib/pepflashplayer64.dll'
    break
}

app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName));


app.commandLine.appendSwitch('ppapi-flash-version', '17.0.0.169')

let win;
app.on("ready",ly_createWindow);
function ly_createWindow(){

    win = new BrowserWindow({
        width: 1280,
        height: 720,
        movable:true,
        resizable:true,
        webPreferences: {
            nodeIntegration: true,
            plugins: true
        }  //electron 5.0之后该参数默认值是false，
    });
     win.loadURL(path.join("http://www.main.org.cn/"));
    // win.webContents.openDevTools();
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