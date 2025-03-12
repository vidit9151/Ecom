import cabinet from "../assets/category icons/cabinet.png";
import motherboard from "../assets/category icons/motherboard.png";
import processor from "../assets/category icons/processor.png";
import ram from "../assets/category icons/ram.png";
import powersupply from "../assets/category icons/powersupply.png";
import storage from "../assets/category icons/storage.png";
import graphicscard from "../assets/category icons/graphicscard.png";
import cooling from "../assets/category icons/cooling.png";
import printer from "../assets/category icons/printer.png";
import keyboard from "../assets/category icons/keyboard.png";
import mouse from "../assets/category icons/mouse.png";
import mouseandkeyboardcombo from "../assets/category icons/mouseandkeyboardcombo.png";
import monitor from "../assets/category icons/monitor.png";
import audio from "../assets/category icons/audio.png";
import prebuildpc from "../assets/category icons/prebuildpc.png";
import ups from "../assets/category icons/ups.png";
import wifi from "../assets/category icons/wifi.png";
import others from "../assets/category icons/others.png";
import other from "../assets/category icons/other.png";

const categoryImagery = (category, num) => {
  if (num === 1) {
    if (category === "cabinet") {
      return cabinet;
    }
    if (category === "motherboard") {
      return motherboard;
    }
    if (category === "processor") {
      return processor;
    }
    if (category === "ram") {
      return ram;
    }
    if (category === "powersupply") {
      return powersupply;
    }
    if (category === "storage") {
      return storage;
    }
    if (category === "graphicscard") {
      return graphicscard;
    }
    if (category === "cooling") {
      return cooling;
    }
    if (category === "printer") {
      return printer;
    }
    if (category === "keyboard") {
      return keyboard;
    }
    if (category === "mouse") {
      return mouse;
    }
    if (category === "mouseandkeyboardcombo") {
      return mouseandkeyboardcombo;
    }
    if (category === "monitor") {
      return monitor;
    }
    if (category === "audio") {
      return audio;
    }
    if (category === "prebuildpc") {
      return prebuildpc;
    }
    if (category === "ups") {
      return ups;
    }
    if (category === "wifi") {
      return wifi;
    }
    if (category === "others") {
      return others;
    } else {
      return other;
    }
  }
  if (num === 2) {
    if (category === "cabinet") {
      return "Cabinet";
    }
    if (category === "motherboard") {
      return "Motherboard";
    }
    if (category === "processor") {
      return "Processor";
    }
    if (category === "ram") {
      return "Ram";
    }
    if (category === "powersupply") {
      return "Power Supply";
    }
    if (category === "storage") {
      return "Storage";
    }
    if (category === "graphicscard") {
      return "Gpu";
    }
    if (category === "cooling") {
      return "Cooling";
    }
    if (category === "printer") {
      return "Printer";
    }
    if (category === "keyboard") {
      return "Keyboard";
    }
    if (category === "mouse") {
      return "Mouse";
    }
    if (category === "mouseandkeyboardcombo") {
      return "Combo";
    }
    if (category === "monitor") {
      return "Monitor";
    }
    if (category === "audio") {
      return "Audio";
    }
    if (category === "prebuildpc") {
      return "Pre-Build";
    }
    if (category === "ups") {
      return "U.P.S.";
    }
    if (category === "wifi") {
      return "Wi-fi";
    }
    if (category === "others") {
      return "Others";
    }
  }
};

export default categoryImagery;
