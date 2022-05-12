import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDacQ-h8fjtHd_HFXBp3v10gsZsCNoGdJs",
    authDomain: "mentoreshn.firebaseapp.com",
    databaseURL: "https://mentoreshn-default-rtdb.firebaseio.com",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var fireDbRef = firebase.database().ref();

export default fireDbRef;
