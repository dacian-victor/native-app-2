import colors from "../consts/colors";

export class Event {
    static art = new Event("art",colors.fuchsia)
    static movie = new Event("movie",colors.darkturquoise)
    static museum = new Event("museum",colors.greenyellow)
    static concert = new Event("concert",colors.lightgreen)
    static teater = new Event("teater",colors.lightskyblue)
    static dj = new Event("dj",colors.slategray)
  
    constructor(name, color) {
      this.name = name
      this.color = color;
    }

    getColor(value) {
      return Object.values(Event)[Object.keys(Event).indexOf(value)].color
    }
  }