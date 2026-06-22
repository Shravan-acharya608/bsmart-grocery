import { db } from "./firebase.js";

import {

collection,
onSnapshot,
doc,
updateDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const ordersDiv =
document.getElementById("orders");

onSnapshot(

collection(db,"orders"),

(snapshot)=>{

ordersDiv.innerHTML="";

snapshot.forEach((order)=>{

const data =
order.data();

ordersDiv.innerHTML += `

<div class="card">

<h3>
${data.name}
</h3>

<p>
Order ID:
${data.orderId}
</p>

<p>
Phone:
${data.phone}
</p>

<p>
Status:
${data.status}
</p>

<p>

Rice:
${data.order.Rice}

<br>

Milk:
${data.order.Milk}

<br>

Sugar:
${data.order.Sugar}

<br>

Oil:
${data.order.Oil}

</p>

<button
onclick="prepareOrder(
'${order.id}'
)">
Preparing
</button>

<button
onclick="readyOrder(
'${order.id}'
)">
Ready
</button>

</div>

`;

});

}

);

window.prepareOrder =
async(id)=>{

await updateDoc(

doc(
db,
"orders",
id
),

{
status:"Preparing"
}

);

};

window.readyOrder =
async(id)=>{

await updateDoc(

doc(
db,
"orders",
id
),

{
status:"Ready for Pickup"
}

);

};
