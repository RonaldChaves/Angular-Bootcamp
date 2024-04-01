"use strict";
let hero = [{
        name: 'Batman', city: 'gothan', force: 90, GorB: true, verifyGorB(gorB) {
            gorB = this.GorB;
            if (gorB == true) {
                return `O ${hero[0].name} eh um heroi.`;
            }
            else {
                return `O ${hero[0].name} eh um vilao.`;
            }
        }
    }];
class Person {
    constructor(name, age, statusOfLife) {
        this.name = name;
        this.age = age;
        this.statusOfLife = statusOfLife;
    }
    alived() {
        let condition = this.statusOfLife;
        if (condition) {
            return `I'm good`;
        }
        else {
            return `i'm dead`;
        }
    }
    sayHi(text) {
        return text;
    }
}
const RONALD = new Person('Ronald', 21, true);
console.log(RONALD.sayHi('Hi!'));
console.log(RONALD.alived());
