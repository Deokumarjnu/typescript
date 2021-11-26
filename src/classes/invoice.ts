import { Hasformatter } from "../interfaces/hasFormatter";

export class Invoice implements Hasformatter {

    constructor(
        readonly client: string, 
        private details: string, 
        public amount: number) {}

    formate() {
        return `${this.client} owes $ ${this.amount} for  ${this.details}`;
    }
}
