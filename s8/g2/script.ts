class SonAccount {

    oneDeposit: number;
    oneWithDraw: number;

    constructor(oneDeposit: number, oneWithDraw: number) {
        this.oneDeposit = oneDeposit;
        this.oneWithDraw = oneWithDraw;
    }

    balanceInit(): number {
        return this.oneDeposit - this.oneWithDraw
    }

}

class MotherAccount extends SonAccount {

}