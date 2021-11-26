
// creating an object
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { Hasformatter } from "./interfaces/hasFormatter.js";
import { ListTamplate } from "./classes/listTemplate.js";

const invOne = new Invoice("hey", "work on some website", 300);
const invTwo = new Invoice("abc", "work on another website", 500);

// 
let invoices : Invoice[] = [];
const ul = document.querySelector('ul')!;
const list = new ListTamplate(ul)
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => console.log("inv", inv));

const form = document.querySelector(".new-item-form") as HTMLFormElement;


const type = document.querySelector("#type") as HTMLSelectElement;
const toForm = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e : Event) =>{
    e.preventDefault();
    let docs: Hasformatter;

    if(type.value === "invoice") {
        docs = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    } else {
        docs = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    list.render(docs, type.value, 'end')

})