import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// import firebaseConfig from "./config";

const firebaseConfig = {
    apiKey: "AIzaSyCUF3Jl_x4T9D5qYClcTv7J0OLt7P8V5NY",
    authDomain: "linkedin-clone-32989.firebaseapp.com",
    projectId: "linkedin-clone-32989",
    storageBucket: "linkedin-clone-32989.appspot.com",
    messagingSenderId: "184137572713",
    appId: "1:184137572713:web:658153fc1cf2637c311df8",
    measurementId: "G-P5ELDMDYER"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
