// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN4tfEKwBOSrwGHyNWGYQtCatNh_xyMmA",
  authDomain: "mygitapp-29c23.firebaseapp.com",
  databaseURL: "https://mygitapp-29c23-default-rtdb.firebaseio.com",
  projectId: "mygitapp-29c23",
  storageBucket: "mygitapp-29c23.appspot.com",
  messagingSenderId: "513181905170",
  appId: "1:513181905170:web:551e92adaf05a9488c03cb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;