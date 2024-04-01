"use strict";
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} attacked with ${this.stregth} points.`);
    }
}
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const perso1 = new Character('Batman', 35, 88);
const perso2 = new Magician('Lord Valdemor', 23, 90, 110);
