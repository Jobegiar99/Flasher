import { initializeApp } from "firebase/app";
import { getFirestore, firestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyB8LRQkd9LocZMCWY2yXUolao2AGDpzDYI",
    authDomain: "pixelborregos-ba07a.firebaseapp.com",
    databaseURL: "https://pixelborregos-ba07a-default-rtdb.firebaseio.com",
    projectId: "pixelborregos-ba07a",
    storageBucket: "pixelborregos-ba07a.appspot.com",
    messagingSenderId: "218624718674",
    appId: "1:218624718674:web:d111fda38fa18774426c8b"
};
const firebaseApp = initializeApp(config);
const db = getFirestore(firebaseApp)

export default db;