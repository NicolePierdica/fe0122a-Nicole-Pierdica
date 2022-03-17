abstract class Lavoratori {
    
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;

    constructor(redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
        
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }

    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;
    abstract getRedditoAnnuoNetto(): number;
}

class Lavoratore extends Lavoratori {
    constructor(redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
        super(redditoAnnuoLordo, tasseInps, tasseIrpef);
    }

    getUtileTasse(): number {
        return this.redditoAnnuoLordo
    }

    getTasseInps(): number {
        return this.tasseInps

    }

    getTasseIrpef(): number {
        return this.tasseIrpef
    }

    getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoNetto = this.redditoAnnuoLordo - (this.tasseInps + this.tasseIrpef)
        
    }

}