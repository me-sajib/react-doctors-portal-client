// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChr6d1G7iv00VP2UgQYr_QMKOthegQPao",
  authDomain: "doctors-portal-a8106.firebaseapp.com",
  projectId: "doctors-portal-a8106",
  storageBucket: "doctors-portal-a8106.appspot.com",
  messagingSenderId: "623273776722",
  appId: "1:623273776722:web:fd7df369419e19f2fe318b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
