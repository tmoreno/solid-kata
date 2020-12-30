export class Transaction {
    constructor(
        private _date: Date,
        private _amount: number
    ) {}

    date(): Date {
        return this._date;
    }

    amount(): number {
        return this._amount;
    }
}
