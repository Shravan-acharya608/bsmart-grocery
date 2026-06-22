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

let total = 0;
let pending = 0;

snapshot.forEach((order)=>{

total++;

const data = order.data();

if(data.status==="Pending"){
pending++;
}

ordersDiv.innerHTML += `

<div class="order-card">

<div class="order-top">

<h3>${data.name}</h3>

<span class="status-badge">
${data.status}
</span>

</div>

<p>
📞 ${data.phone}
</p>

<p>
🆔 ${data.orderId}
</p>

<hr>

<p>
🥛 Milk : ${data.order.Milk}
</p>

<p>
🍚 Rice : ${data.order.Rice}
</p>

<p>
🍬 Sugar : ${data.order.Sugar}
</p>

<p>
🛢 Oil : ${data.order.Oil}
</p>

<div class="btn-group">

<button
class="prepare-btn"
onclick="prepareOrder('${order.id}')">
Preparing
</button>

<button
class="ready-btn"
onclick="readyOrder('${order.id}')">
Ready
</button>

</div>

</div>

`;

});

document.getElementById(
"totalOrders"
).innerText = total;

document.getElementById(
"pendingOrders"
).innerText = pending;

}
);

window.prepareOrder =
async(id)=>{

await updateDoc(
doc(db,"orders",id),
{
status:"Preparing"
}
);

};

window.readyOrder =
async(id)=>{

await updateDoc(
doc(db,"orders",id),
{
status:"Ready for Pickup"
}
);

};
