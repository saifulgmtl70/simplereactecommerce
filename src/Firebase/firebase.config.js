// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCdkBX6Ew8uK-RWSG8TDg_cCG7WFVlStY",
  authDomain: "ecommerce-acfaf.firebaseapp.com",
  projectId: "ecommerce-acfaf",
  storageBucket: "ecommerce-acfaf.appspot.com",
  messagingSenderId: "28122874838",
  appId: "1:28122874838:web:268dd92f7025f498e75a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;