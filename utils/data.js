import PogObject from "PogData"

export let data = new PogObject("yuki", {
  firstTime: true,
  kuudraWarning: {
    x: 489,
    y: 217,
    scale: 2.8200000000000016
  },
  ragNotif: {
    x: 483,
    y: 322,
    scale: 2.8,
    castedString: "&6&lCASTED AXE!",
    readyToCastString: "&6&lREADY TO CAST!"
  }
}, "data.json");

register("gameUnload", () => {
  data.save();
});

register("command", () => {
  data.save()
}).setCommandName("forceSaveData", true)