import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-X9Ta8_cw2_8Vm8rlsO2uO4kbKhebd58",
    authDomain: "facebook-messenger-clone-7d4f1.firebaseapp.com",
    projectId: "facebook-messenger-clone-7d4f1",
    storageBucket: "facebook-messenger-clone-7d4f1.appspot.com",
    messagingSenderId: "806243218402",
    appId: "1:806243218402:web:58276e1b8290ac97e63fbb",
    measurementId: "G-C3D77HP2BR"
});

const db = firebaseApp.firestore();

export default db;