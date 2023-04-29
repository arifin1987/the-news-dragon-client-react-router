// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtfypkOjfBlH7TMNbMLlcBAmr_QlH3Mls",
  authDomain: "the-news-dragon-client-19d47.firebaseapp.com",
  projectId: "the-news-dragon-client-19d47",
  storageBucket: "the-news-dragon-client-19d47.appspot.com",
  messagingSenderId: "905129265334",
  appId: "1:905129265334:web:f451ad99f7140ddc407e17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;