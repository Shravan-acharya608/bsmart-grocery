import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.signup = async () => {

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{

await createUserWithEmailAndPassword(
auth,
email,
password
);

alert("Account Created!");

window.location =
"login.html";

}
catch(error){

alert(error.message);

}

};

window.login = async () => {

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

alert("Login Successful");

window.location =
"index.html";

}
catch(error){

alert(error.message);

}

};

window.logout = async () => {

await signOut(auth);

window.location =
"login.html";

};
