import { data } from "../utils/data.js";
import { consts } from "../utils/format.js";
import Settings from "../config.js";
import { abbrNum, isPlayerAt} from "../utils/functions.js";
import ScalableGui from "../../BloomCore/utils/ScalableGui.js";
import {renderCenteredString, registerWhen} from "../../BloomCore/utils/Utils.js";
const prefix = consts.prefix

//Kuudra DPS    
let yCheck = false
let timerStart = 0


register("chat", () => {
    yCheck = true
}).setCriteria("[NPC] Elle: I knew you could do it!");

register("step", () => {
    if(yCheck == false) return;
    playerY = Math.round(Player.getY());
    if(playerY<69){
        timerStart = Date.now() / 1000;
        yCheck = false
    }
})

register("chat", () => {
    let timerStop = Date.now() / 1000;
    let timer = timerStop - timerStart
    let dpsMath = (300000000 / timer)
    let dps = abbrNum(dpsMath,2)
    if(Settings.kuudraDPS == true){
        ChatLib.chat(prefix+"&eParty DPS:&a "+dps)
        if(Settings.kuudraDPSChat == false) return;
        ChatLib.say("Party DPS: "+dps)    
    }
}).setCriteria("KUUDRA DOWN").setContains();



//Mana drain 

register("chat", (message) => {
    if(Settings.manaDrain == false) return;
    if(isPlayerAt("Area: Kuudra") == false) return;

    msg = ChatLib.getChatMessage(message, false)
    mana = msg.replace(/[a-zA-Z\W]/g, "")

    ChatLib.say("/pc Mana Drain! Used "+mana+" mana")
}).setCriteria("Used Extreme Focus!").setContains()


//Lifeline alert

llProc = false

register("chat", () => {
    llProc = true
}).setCriteria("[NPC] Elle: Phew! The Ballista is finally ready! It should be strong enough to tank Kuudra's blow!")

register("actionBar", (event) => {
    if(Settings.lifelineAlert == false) return;
    if(llProc == false) return;
    
    let health = ChatLib.getChatMessage(event, false).replace(/,|§\w|(❤.*)\D/g, "")
    let currentHealth = parseInt(health.replace(/(\D.*)/g, ""))
    let maxHealth = parseInt(health.replace(/.*(?=\/)\D/g, ""))
    let llHealth = Math.round(maxHealth*0.2)
    
    if(currentHealth>llHealth) return;

    llProc = false
    Client.Companion.showTitle(`&c&lLL PROC!`, "", 0, 25, 5)
})

//Kuudra attack warning

function Ding(pitch){
    World.playSound("random.orb", 100, pitch)
}


new ScalableGui(data, data.kuudraWarning).setCommand("moveYukiKuudraAttackWarning")

register("step", () => {
    if(Settings.kuudraWarning == false) return;
    // if(isPlayerAt("Area: Kuudra") == false) return;
    if(!Settings.kuudraWarningGreenText) Settings.kuudraWarningGreenText = "&a&lGreen Warning!";
    if(!Settings.kuudraWarningOrangeText) Settings.kuudraWarningOrangeText = "&6&lOrange Warning!";
    if(!Settings.kuudraWarningRedText) Settings.kuudraWarningRedText = "&c&lRed Warning!";

    

    function standingBlock(){
        if(World.isLoaded() == false) return;
        let block = World.getBlockAt(Player.getX() - 1, Player.getY() - 1, Player.getZ() - 1);
        return block.getState()
    }

    if(standingBlock() == "minecraft:stained_hardened_clay[color=lime]" && Settings.kuudraWarningOrange == true){
        Ding(0.5)
    }
    registerWhen(register("renderOverlay", () => {
        renderCenteredString(Settings.kuudraWarningGreenText, data.kuudraWarning.x, data.kuudraWarning.y, data.kuudraWarning.scale)
    }), () => Settings.kuudraWarningGreen &&  standingBlock() == "minecraft:stained_hardened_clay[color=lime]")
    

    if(standingBlock() == "minecraft:stained_hardened_clay[color=orange]" && Settings.kuudraWarningOrange == true){
        Ding(0.8)
    }
    registerWhen(register("renderOverlay", () => {
        renderCenteredString(Settings.kuudraWarningOrangeText, data.kuudraWarning.x, data.kuudraWarning.y, data.kuudraWarning.scale)
    }), () => Settings.kuudraWarningOrange &&  standingBlock() == "minecraft:stained_hardened_clay[color=orange]")

    if(standingBlock() == "minecraft:stained_hardened_clay[color=red]" && Settings.kuudraWarningRed == true){
        Ding(1)
    }
    registerWhen(register("renderOverlay", () => {
        renderCenteredString(Settings.kuudraWarningRedText, data.kuudraWarning.x, data.kuudraWarning.y, data.kuudraWarning.scale)
    }), () => Settings.kuudraWarningRed &&  standingBlock() == "minecraft:stained_hardened_clay[color=red]")

}).setFps(5)

