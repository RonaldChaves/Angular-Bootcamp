class Character {
    readonly name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`${this.name} attacked with ${this.stregth} points.`);
    }
}

class Magician extends Character {
    magicPoints: number;

    constructor(name: string, stregth: number, skill: number, magicPoints: number){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const perso1 = new Character('Batman', 35, 88);
const perso2 = new Magician('Lord Valdemor', 23, 90, 110);

