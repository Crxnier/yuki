import { consts } from "../utils/format.js";
import { data } from "../utils/data.js";
import Settings from "../config.js";
const prefix = consts.prefix
import ScalableGui from "../../BloomCore/utils/ScalableGui.js";
import {renderCenteredString, registerWhen} from "../../BloomCore/utils/Utils.js";
import RenderLib from "../../RenderLib/index.js";


//Not in sb



//Requeue
cancelled = false

register("command", () => {
    cancelled = true
    ChatLib.chat(prefix+"Cancelled auto requeue")
}).setName("cancelrequeue")

register("chat", () => {
    cancelled = false
    if(Settings.autoRequeue == false) return
    delay = parseInt(Math.floor(Settings.autoRequeueTimer*1000))
    const clickableMessage = new Message(
         new TextComponent(prefix+"Click here to cancel auto requeue").setClick("run_command", "/cancelrequeue"),
      );
    ChatLib.chat(clickableMessage)

    setTimeout(() => {
        if(cancelled == true) return
        ChatLib.chat(prefix+"Attempting to queue...")
        ChatLib.command("instancerequeue")
    }, delay)

}).setCriteria("${before}CLICK HERE to re-queue into${after}")


//Rag axe

new ScalableGui(data, data.ragNotif).setCommand("moveYukiRagAxeNotifier")
renderCasted = true
renderReadyToCast = true
casted = true
//IDK why it isnt doing timeout 
register("actionBar", () => {
    if(Settings.ragNotif == false) return;
    heldItem = Player.getHeldItem().getNBT().getCompoundTag("tag").getCompoundTag("ExtraAttributes").getString("id");
    if(!heldItem.equals("RAGNAROCK_AXE")) return;
    casted = true

    registerWhen(register("renderOverlay", () => {
        renderCenteredString(data.ragNotif.castedString, data.ragNotif.x, data.ragNotif.y, data.ragNotif.scale)
    }), () => Settings.ragNotif && renderCasted == true && casted == true)

    setTimeout(() => {
        renderCasted = false
        casted = false
    }, 3500)

    setTimeout(() => {
        renderReadyToCast = true
        registerWhen(register("renderOverlay", () => {
            renderCenteredString(data.ragNotif.readyToCastString, data.ragNotif.x, data.ragNotif.y, data.ragNotif.scale)
        }), () => Settings.ragNotif && renderReadyToCast == true)

        setTimeout(() => {
            renderReadyToCast = false
            renderCasted = true
        }, 3500)

    }, 17000)
}).setCriteria("${before}CASTING");

//tooba

register("actionBar", (event) => {
    if(Settings.tubaAlert == false) return;

    howlUsage = ChatLib.getChatMessage(event, false).replace(/\W|\d|[Mana]|[b]/g, "") //Bad regex i think, sorry I'm not good with it
    
    if(howlUsage == "Howl"){
        Client.Companion.showTitle("&5&lTuba!", "", 0, 25, 5)
    }
    
})

//Party tooba
register("soundPlay", (soundPos, soundName, soundVol, soundPitch) => {
    if(Settings.partyTubaAlert == false) return;
    if(soundName != "mob.wolf.howl") return;
    heldItem = Player.getHeldItem().getNBT().getCompoundTag("tag").getCompoundTag("ExtraAttributes").getString("id");
    if(heldItem.equals("WEIRDER_TUBA")) return;
    if(heldItem.equals("WEIRD_TUBA")) return; //Does checking it matter?

    // Highest rag: 1.4920635223388672
    // Lowest Tuba: 1.5079364776611328
    // Highest Tuba: 1.9682539701461792
    // Keeping notes, might be useful one day

    if(soundPitch < 1.507) return;
    Client.Companion.showTitle("&5&lParty Tuba!", "", 0, 25, 5)
})

//Togglesprint - requested

const forwardKey = new KeyBind(Client.getMinecraft().field_71474_y.field_74351_w)

register("step", () => {
    if (Settings.autoSprint == false || !forwardKey.isKeyDown() || Player.isSneaking()) return
    Player.getPlayer().func_70031_b(true)
})


register("chat", (name) => {
    if(Settings.autoPC == false) return;
    ChatLib.command("chat p")
}).setCriteria("You have joined ${name} party!")

register("chat", (name) => {
    if(Settings.autoAC == false) return;
    ChatLib.command("chat a")
}).setCriteria("You left the party.")

register("chat", (name) => {
    if(Settings.autoAC == false) return;
    ChatLib.command("chat a")
}).setCriteria("You have been kicked from the party by ${name}")