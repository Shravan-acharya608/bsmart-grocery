import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain:
"bsmart-589e7.firebaseapp.com",

projectId:
"bsmart-589e7",

storageBucket:
"bsmart-589e7.firebasestorage.app",

messagingSenderId:
"292717288196",

appId:
"1:292717288196:web:0aeceba3e17cf150d18e51"

};

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);

const auth =
getAuth(app);

export {
db,
auth
};
