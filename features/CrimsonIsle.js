import { consts } from "../utils/format.js";
import Settings from "../config.js";
const prefix = consts.prefix

//Vanq + party

register("chat", () => {
    const playerX = Math.round(Player.getX());
    const playerY = Math.round(Player.getY());
    const playerZ = Math.round(Player.getZ());
    if(Settings.vanqNotif == false) return;

    let random = (Math.random() + 1).toString(36).substring(7);
    Client.Companion.showTitle("&4&lVANQUISHER", "", 0, 25, 5)
    World.playSound("mob.wither.spawn", 1, 1)
    if(Settings.vanqChat == 1){
        ChatLib.command("pc"+" x: "+playerX+", y: "+playerY+", z: "+playerZ+" Vanquisher ["+random+"]")
    }
    else if(Settings.vanqChat == 2){
        ChatLib.command("ac"+" x: "+playerX+", y: "+playerY+", z: "+playerZ+" Vanquisher ["+random+"]")
    }
    
    if(Settings.vanqParty != null) return;
    ChatLib.command("party "+ Settings.vanqParty)
    
}).setCriteria("A Vanquisher is spawning nearby!")

//Jawbus detection

let deathMessage = true

register("chat", (before) => {
    if(Settings.jawbusDetection == false) return;
    if(deathMessage == false) return
    Client.Companion.showTitle(`&c&lJAWBUS DEATH!`, "", 0, 25, 5);
    World.playSound("mob.irongolem.death", 1, 1)
    deathMessage = false
    setTimeout(() => {
        deathMessage = true
    }, 60000)
}).setCriteria("${before}was slain by Lord Jawbus!")
//Not efficient having two chat checkers, will merge together later im lazy rn
register("chat", () => {
    if(Settings.jawbusDetection == false) return;
    Client.Companion.showTitle(`&c&lJAWBUS!`, "", 0, 25, 5);
    World.playSound("mob.irongolem.death", 1, 1)
}).setCriteria("You have angered a legendary creature... Lord Jawbus has arrived!");

//Thunder detection

register("chat", () => {
    if(Settings.thunderDetection == false) return;
    Client.Companion.showTitle(`&1&lTHUNDER!`, "", 0, 25, 5);
    World.playSound("mob.guardian.death", 1, 1)
}).setCriteria("You hear a massive rumble as Thunder emerges.");