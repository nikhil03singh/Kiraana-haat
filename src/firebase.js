import firebase from "firebase/app"
import "firebase/auth"
import "firebase/analytics"
import "firebase/database"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDOowsHh0pcPYHd4v9y47YLBka8LD71xsk",
    authDomain: "kiraanahaatnew.firebaseapp.com",
    databaseURL: "https://kiraanahaatnew-default-rtdb.firebaseio.com",
    projectId: "kiraanahaatnew",
    storageBucket: "kiraanahaatnew.appspot.com",
    messagingSenderId: "545158943327",
    appId: "1:545158943327:web:b014a512f5604915a701ea",
    measurementId: "G-R3ESKQMPRZ"
})

if (!firebase.apps.length) {
    firebase.initializeApp(app);
 }else {
    firebase.app(); // if already initialized, use that one
 }
 firebase.analytics();

export const auth = app.auth()
export default app