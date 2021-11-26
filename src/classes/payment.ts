import { Hasformatter } from "../interfaces/hasFormatter";

export class Payment implements Hasformatter{

    constructor(
        readonly recipient: string, 
        private details: string, 
        public amount: number) {}

    formate() {
        return `${this.recipient} owes $ ${this.amount} for  ${this.details}`;
    }
}
