import { data } from "../utils/data.js";
import { consts } from "../utils/format.js";
import Settings from "../config.js";

const prefix = consts.prefix
//Warps

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp castle");
}).setName("castle").setAliases("ruin");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp museum");
}).setName("museum")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp wizard");
}).setName("wizard").setAliases("wiz");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp da");
}).setName("da").setAliases("darkauction");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp crypt");
}).setName("crypt")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp barn");
}).setName("barn")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp desert");
}).setName("desert")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp trapper");
}).setName("trapper").setAliases("trap");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp park");
}).setName("park")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp jungle");
}).setName("jungle")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp howl");
}).setName("howlingcave").setAliases("howl");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp gold");
}).setName("gold")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp dwarves");
}).setName("dwarf").setAliases("mines","dwarves");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp nucleus");
}).setName("nucleus").setAliases("nuke");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp spider");
}).setName("spider").setAliases("den")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp nest");
}).setName("nest")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp arachne");
}).setName("arachne").setAliases("sanctuary");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp end");
}).setName("end")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp drag");
}).setName("dragon").setAliases("drag");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp seplture");
}).setName("void").setAliases("sepulture");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp isle");
}).setName("nether").setAliases("crimson", "isle");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp smold");
}).setName("smold").setAliases("smoldering");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp kuudra");
}).setName("kd").setAliases("koodra", "kuudra", "skull");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp wasteland");
}).setName("wasteland").setAliases("waste");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp scarleton");
}).setName("scarleton").setAliases("scare");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp dragontail");
}).setName("dragontail").setAliases("dragont");

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp Garden")
}).setName("garden")

register("command", () => {
    if(Settings.easierWarpsEnabled) ChatLib.command("warp deep")
}).setName("deep")

//Coords

register("command", (...args) => {
    const playerX = Math.round(Player.getX());
    const playerY = Math.round(Player.getY());
    const playerZ = Math.round(Player.getZ());
    
    let result = args.join(" ");
    let random = (Math.random() + 1).toString(36).substring(7);
    if(!result){
        if(Settings.coordsChat == 0){
            ChatLib.say("x: "+playerX+", y: "+playerY+", z: "+playerZ)
        }
        if(Settings.coordsChat == 1){
            ChatLib.command("pc x: "+playerX+", y: "+playerY+", z: "+playerZ);
        }
        if(Settings.coordsChat == 2){
            ChatLib.command("ac x: "+playerX+", y: "+playerY+", z: "+playerZ+" ["+random+"]");
        }
    }

    if(result == "party"){
        ChatLib.command("pc x: "+playerX+", y: "+playerY+", z: "+playerZ)
    }
    if(result == "all"){
        ChatLib.command("ac x: "+playerX+", y: "+playerY+", z: "+playerZ+" ["+random+"]")
    }
    if(result == "set p" || result == "set party"){
        Settings.coordsChat = 1
    }
    if(result == "set a" || result == "set all"){
        Settings.coordsChat = 2
    }
    console.log(Settings.coordsChat)
}).setName("coordinates").setAliases("coords", "coord", "cd", "co");