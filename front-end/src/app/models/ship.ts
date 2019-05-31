export class Ship {
    cellarCapacity: number;
    cellar: any[];
    stats: any[];
    crewCards: any[];
    distance: number;
    usedCreList: string[];
    actionsList: any[];

    startingGame: boolean;

    constructor(){
        this.cellarCapacity = 50;
        this.cellar = [
            {
                water: 10,
                food: 10,
                grog: 1,
                wood: 3
            }
        ];
        this.stats = [
            {
                coins: 50,
                health: 100,
                attack: 0,
                view: 0,
                movement: 0,    
                moral: 100,               
            }
        ];
        this.crewCards = [];
        this.distance = 0;
        this.usedCreList = [];
        this.actionsList = ["Mover", "Tienda"];

        this.startingGame = true;

    }
}
