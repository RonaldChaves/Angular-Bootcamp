
type arrHeros = {
    name: string;
    force: number;
    city: string;
    GorB: boolean;

    verifyGorB(gorB: boolean): string;

}

let hero: Array<arrHeros> = [{
    name: 'Batman', city: 'gothan', force: 90, GorB: true, verifyGorB(gorB) {
        gorB = this.GorB;
        if (gorB == true) {
            return `O ${hero[0].name} eh um heroi.`;
        }
        else {
            return `O ${hero[0].name} eh um vilao.`;
        }
    }
}]

interface persona {
    name: string;
    age: number;
    statusOfLife: boolean;

    alived(): string;
    sayHi(text: string): string;
}

class Person implements persona {
    name: string;
    age: number;
    statusOfLife: boolean;

    constructor(name: string, age: number, statusOfLife: boolean){
        this.name = name;
        this.age = age;
        this.statusOfLife = statusOfLife;
    }

    alived(): string {
        let condition = this.statusOfLife;

        if(condition){
            return `I'm good`;
        } else{
            return `i'm dead`;
        }
    }

    sayHi(text: string): string {
        return text;
    }
}

const RONALD = new Person('Ronald', 21, true);

console.log(RONALD.sayHi('Hi!'));
console.log(RONALD.alived());