// creating an object
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTamplate } from "./classes/listTemplate.js";
const invOne = new Invoice("hey", "work on some website", 300);
const invTwo = new Invoice("abc", "work on another website", 500);
// 
let invoices = [];
const ul = document.querySelector('ul');
const list = new ListTamplate(ul);
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => console.log("inv", inv));
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let docs;
    let values;
    values = [toForm.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        docs = new Invoice(...values);
    }
    else {
        docs = new Payment(...values);
    }
    list.render(docs, type.value, 'end');
});
