import { db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.placeOrder = async ()=>{

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const orderId =
"BS" + Date.now();

const order = {

Rice:Number(
document.getElementById("rice").value
),

Milk:Number(
document.getElementById("milk").value
),

Sugar:Number(
document.getElementById("sugar").value
),

Oil:Number(
document.getElementById("oil").value
)

};

await addDoc(
collection(db,"orders"),
{
orderId,
name,
phone,
order,
status:"Pending",
time:serverTimestamp()
}
);

alert(
"Order Submitted\n\nOrder ID: "
+ orderId
);

};
