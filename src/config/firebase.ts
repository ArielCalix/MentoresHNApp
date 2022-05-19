import firebase from "firebase";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATBASE,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var fireDbRef = firebase.database().ref();

export default fireDbRef;
