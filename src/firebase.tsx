import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyUNscf0ldFfe3WpKhSpwyvaUabtsu7VA",
  authDomain: "eco-warriors-hub.firebaseapp.com",
  projectId: "eco-warriors-hub",
  storageBucket: "eco-warriors-hub.appspot.com",
  messagingSenderId: "582476279798",
  appId: "1:582476279798:web:d23e4d312b981080b561d7",
  measurementId: "G-DQ08GB849D"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app)

export {db, storage};
