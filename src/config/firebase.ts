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

// export const userName = prompt("What's your name?");
// const urlparams = new URLSearchParams(window.location.search);
// const roomId = urlparams.get("id");

// if (roomId) {
//     fireDbRef = fireDbRef.child(roomId);
// } else {
//     fireDbRef = fireDbRef.push();
//     window.history.replaceState(null, "", "meet?id=" + fireDbRef.key);
// }

export default fireDbRef;
