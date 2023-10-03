// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARnaHSmq_FHM_brwde_0-HPuF04ykjAHU",
  authDomain: "netflix-bff56.firebaseapp.com",
  projectId: "netflix-bff56",
  storageBucket: "netflix-bff56.appspot.com",
  messagingSenderId: "553135491503",
  appId: "1:553135491503:web:3f8defd9857593e618c75a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
