const {Menu} = require("electron");

let template = [
    {
    label:"文件",
    submenu:[
        {
            label:"新建文件",
            accelerator:(function(){
                if(process.platform =="darwin"){
                    return "ctrl+command+N";
                }else{
                    return "ctrl+alt+N";
                }
            })(),
            click: function(){
            console.log("new file");
            }
        },
        {
            label:"新建窗口",
            accelerator:"ctrl+alt+M",
            click: function(){
                console.log("new window");
            }
        }
    ]
    },
    {
        type:"separator"
    },
    {
     label:"编辑"   
    }
];

let menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);