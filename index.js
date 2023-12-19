//Importing features
import "./features/Commands.js";
import "./features/CrimsonIsle.js";
import "./features/Miscellaneous.js";
import "./features/Kuudra.js";
// import "./features/GUI.js";
// import { openGUI } from "./features/GUI.js"
import Settings from "./config.js";
import { data } from "./utils/data.js";
import { consts } from "./utils/format.js";




let prefix = consts.prefix;

//First time
if(data.firstTime == true){
    ChatLib.chat(prefix+"Welcome to &Yuki&e! do &a/yuki&e to enable commands!")
    data.firstTime = false;
    data.save();
}

register("command", () => {  
    Settings.openGUI()
  }).setCommandName("yuki", true)
  
register("command", () => {
    data.save()
}).setCommandName("forceSaveData", true)