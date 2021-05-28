import firebase from "firebase/app"
import "firebase/auth"


const app = firebase.initializeApp({
    apiKey: "AIzaSyAtmfwNQDE6bRcR6g9inPfF5pznbtkkvPY",
    authDomain: "kiraanahaat.firebaseapp.com",
    databaseURL: "https://kiraanahaat-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kiraanahaat",
    storageBucket: "kiraanahaat.appspot.com",
    messagingSenderId: "724349304278",
    appId: "1:724349304278:web:b36c01de78d548bd1f7877",
    measurementId: "G-M5L66TZSPB"
})

export const auth = app.auth()
export default app