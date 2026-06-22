import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsr3FWkcayhv2f_UgtHmsyFytaYP7uvic",
  authDomain: "bsmart-589e7.firebaseapp.com",
  projectId: "bsmart-589e7",
  storageBucket: "bsmart-589e7.firebasestorage.app",
  messagingSenderId: "292717288196",
  appId: "1:292717288196:web:0aeceba3e17cf150d18e51"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
