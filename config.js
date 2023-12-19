// @ts-nocheck
import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SelectorProperty, @SliderProperty, Color, @CheckboxProperty } from 'Vigilance';

@Vigilant("Yuki", "§cYuki", {
  getCategoryComparator: () => (a, b) => {
    const categories = ["Crimson Isle", "Kuudra", "Miscellaneous", "GUI", "Contact me"]
    return categories.indexOf(a.name) - categories.indexOf(b.name);
  }
})
class Settings {
  //GUIs

  
  //Crimson Isle

  @SwitchProperty({
    name: "Vanquisher alert",
    description: "Alerts you when you spawn a vanquisher",
    category: "Crimson Isle",
    subcategory: "Vanquisher"
  })
  vanqNotif = false;

  @SelectorProperty({
    name: "Vanquisher chat",
    description: "Puts coordinates of your vanquisher in a selected chat\nyou can also do /coords <chat> to send your coordinates",
    category: "Crimson Isle",
    subcategory: "Vanquisher",
    options: ["Off", "Party", "All"]
  })
  vanqChat = 0;

  @TextProperty({
    name: "Vanquisher party",
    description: "Parties people when you spawn a vanquisher",
    category: "Crimson Isle",
    subcategory: "Vanquisher",
    placeholder: "name1 name2 name3 name4"
  })
  vanqParty = "";

  @SwitchProperty({
    name: "Jawbus Alert",
    description: "Alerts you when someone in the lobby dies to Jawbus or you fish up Jawbus",
    category: "Crimson Isle",
    subcategory: "Lava sea creature alert"
  })
  jawbusDetection = false;

  @SwitchProperty({
    name: "Thunder Alert",
    description: "Alerts you when you fish up Thunder",
    category: "Crimson Isle",
    subcategory: "Lava sea creature alert"
  })
  thunderDetection = false;

  //Kuudra

  @SwitchProperty({
    name: "Party DPS",
    description: "Tries to calculate party DPS on kuudra",
    category: "Kuudra",
    subcategory: "DPS"
  })
  kuudraDPS = false

  @SwitchProperty({
    name: "Party DPS Chat",
    description: "Sends the DPS into the chat",
    category: "Kuudra",
    subcategory: "DPS"
  })
  kuudraDPSChat = false;

  @SwitchProperty({
    name: "Mana drain",
    description: "Tells party how much mana you used &cWarning&r currently only works with Endstone sword",
    category: "Kuudra"
  })
  manaDrain = false;
  
  @SwitchProperty({
    name: "Lifeline alert",
    description: "Tells you when you're at 20% HP",
    category: "Kuudra"
  })
  lifelineAlert = false;

  @SwitchProperty({
    name: "Kuudra attack warning",
    description: "Warns you when you are standing in a Kuudra attack area",
    category: "Kuudra",
    subcategory: "Attack warning"
  })
  kuudraWarning = false;

  
  @ButtonProperty({
    name: "Move attack warning UI",
    description: "Move and scale the warning display",
    category: "Kuudra",
    subcategory: "Attack warning",
    placeholder: "Move"
  })
  moveKuudraAttackWarningGUI(){
    ChatLib.command("moveYukiKuudraAttackWarning", true)
  };

  @CheckboxProperty({
    name: "Green warning",
    description: "Warns you when the attack zone you're standing on is green",
    category: "Kuudra",
    subcategory: "Attack warning"
  })
  kuudraWarningGreen = false

  @TextProperty({
    name: "Green warning text",
    description: "If you want to have a custom message when you're standing on a green attack zone\nYou can use colour codes",
    placeholder: "&a&lGreen Warning!",
    category: "Kuudra",
    subcategory: "Attack warning"
  })
  kuudraWarningGreenText = "&a&lGreen Warning!"

  @CheckboxProperty({
    name: "Orange warning",
    description: "Warns you when the attack zone you're standing on is orange",
    category: "Kuudra",
    subcategory: "Attack warning"
  })
  kuudraWarningOrange = false

  @TextProperty({
    name: "Orange warning text",
    description: "If you want to have a custom message when you're standing on a orange attack zone\nYou can use colour codes",
    placeholder: "&6&lOrange Warning!",
    category: "Kuudra",
    subcategory: "Attack warning"
  })
  kuudraWarningOrangeText = "&6&lOrange Warning!"

  @CheckboxProperty({
    name: "Red warning",
    description: "Warns you when the attack zone you're standing on is red",
    category: "Kuudra",
    subcategory: "Attack warning"
  })
  kuudraWarningRed = false

  @TextProperty({
    name: "Red warning text",
    description: "If you want to have a custom message when you're standing on a red attack zone\nYou can use colour codes",
    placeholder: "&c&lRed Warning!",
    category: "Kuudra",
    subcategory: "Attack warning"
  })
  kuudraWarningRedText = "&c&lRed Warning!"

  //Misc


  @SelectorProperty({
    name: "Default coords chat",
    description: "Coords command are always on, to use it do &a/coords&r!\nto quickly send coords into a chat do &a/coords party&r or &aall\n&aOff&r means it will send into your hypixel default chat\nyou can also do &a/coords set &r(&aparty&r/&aall&r)\n&a/co&r for short",
    category: "Miscellaneous",
    subcategory: "Commands",
    options: ["Off", "Party", "All"]
  })
  coordsChat = 0;

  @SwitchProperty({
    name: "Auto requeue",
    description: "Automatically requeues after X amount of time (Dungeons + Kuudra)",
    category: "Miscellaneous",
    subcategory: "Requeue"
  })
  autoRequeue = false;

  @SliderProperty({
    name: "Auto requeue timer",
    description: "Time until it requeues",
    min: 5,
    max: 60,
    category: "Miscellaneous",
    subcategory: "Requeue"
  })
  autoRequeueTimer = 10;

  @ButtonProperty({
    name: "Easier warps",
    description: "Warp command are always on, all it does it remove the need for /warp e.g. /warp kuudra => /kuudra",
    category: "Miscellaneous",
    subcategory: "Commands",
    placeholder: "List of all warps"
  })
  warpList(){
    java.awt.Desktop.getDesktop().browse(new java.net.URI("https://hypixel-skyblock.fandom.com/wiki/Fast_Travel"));
  }

  @SwitchProperty({
    name: "Rag axe notifier",
    description: "Alerts you when rag axe is ready to be casted",
    category: "Miscellaneous",
    subcategory: "Item notifier"
  })
  ragNotif = false;

  @ButtonProperty({
    name: "Rag axe notifier UI",
    description: "Move and scale the rag notifier display",
    category: "Miscellaneous",
    subcategory: "Item notifier",
    placeholder: "Move"
  })
  moveYukiRagNotifierGUI(){
    ChatLib.command("moveYukiRagNotifier", true)
  };

  @SwitchProperty({
    name: "Tuba notifier",
    description: "Alerts you when tuba has been used",
    category: "Miscellaneous",
    subcategory: "Item notifier"
  })
  tubaAlert = false;

  @SwitchProperty({
    name: "Auto party chat",
    description: "Puts you in party chat automatically when you join a party",
    category: "Miscellaneous",
    subcategory: "Auto chat"
  })
  autoPC = false;

  @SwitchProperty({
    name: "Auto all chat",
    description: "Puts you in all chat automatically when you leave or get kicked from a party",
    category: "Miscellaneous",
    subcategory: "Auto chat"
  })
  autoAC = false;

  @SwitchProperty({
    name: "Party Tuba notifier",
    description: "Alerts you when someone near you used tuba &crequires&r sounds (mob.wolf.howl)",
    category: "Miscellaneous",
    subcategory: "Item notifier"
  })
  partyTubaAlert = false;
  
  @SwitchProperty({ //Requested feature
    name: "Auto sprint",
    description: "Automatically sprints when you are walking",
    category: "Miscellaneous"
  })
  autoSprint = false;

  //Contact Me

  @ButtonProperty({
    name: "Contact me",
    description: "To report bugs or to suggest ideas dm &bCrxnier&r on discord or click the button",
    category: "Contact me",
    placeholder: "My discord"
  })
  contactButton(){
    java.awt.Desktop.getDesktop().browse(new java.net.URI("https://discordapp.com/users/157619634504204289"));
  }

  constructor(){
    this.initialize(this);

    this.setCategoryDescription("Crimson Isle", "Crimson Isle features")
    this.setCategoryDescription("Kuudra", "Kuudra features")
    this.setCategoryDescription("Miscellaneous", "Aka the 'idk what category to put this in' category")
    this.setCategoryDescription("Contact me", "For bug reports/Idea suggestions")

    this.addDependency("Vanquisher chat", "Vanquisher alert")

    this.addDependency("Party DPS Chat", "Party DPS")

    this.addDependency("Rag axe notifier UI", "Rag axe notifier")

    this.addDependency("Auto requeue timer", "Auto requeue")
    
    this.addDependency("Green warning", "Kuudra attack warning")
    this.addDependency("Green warning text", "Kuudra attack warning")
    this.addDependency("Green warning text", "Kuudra attack warning")
    this.addDependency("Orange warning", "Kuudra attack warning")
    this.addDependency("Orange warning text", "Kuudra attack warning")
    this.addDependency("Orange warning text", "Kuudra attack warning")
    this.addDependency("Red warning", "Kuudra attack warning")
    this.addDependency("Red warning text", "Kuudra attack warning")
    this.addDependency("Move attack warning UI", "Kuudra attack warning")

    this.addDependency("Auto all chat", "Auto party chat")
  }
}
export default new Settings();