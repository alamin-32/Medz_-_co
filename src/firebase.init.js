// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3lksI2oSn_8yVbfEXgDPOfdG6ZvpDBow",
    authDomain: "final-project-62224.firebaseapp.com",
    projectId: "final-project-62224",
    storageBucket: "final-project-62224.appspot.com",
    messagingSenderId: "103397695104",
    appId: "1:103397695104:web:d776c7a2e9a4e8ad129065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth