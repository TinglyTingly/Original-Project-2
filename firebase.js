import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAlI_Gruth5a3-6v2eOeZiLE3ebbWXK1fE",
  authDomain: "food-wall-07312024.firebaseapp.com",
  projectId: "food-wall-07312024",
  storageBucket: "food-wall-07312024.appspot.com",
  messagingSenderId: "102689928022",
  appId: "1:102689928022:web:bcb4dbb44ab976074b1cf7",
  measurementId: "G-7YCVPP7DYZ",
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
