import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB9fEYFT4lMrJiNNcRkMiRX8XLhdh2PVHk",
    authDomain: "crwn-db-94d23.firebaseapp.com",
    databaseURL: "https://crwn-db-94d23.firebaseio.com",
    projectId: "crwn-db-94d23",
    storageBucket: "crwn-db-94d23.appspot.com",
    messagingSenderId: "792552560580",
    appId: "1:792552560580:web:3dd658a166932f80cd7691"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;