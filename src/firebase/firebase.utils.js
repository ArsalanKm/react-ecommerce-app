import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDV3LnBYW3pYl0CFdOep8K-XyQfCb4mt0g",
    authDomain: "crwn-db-fdee4.firebaseapp.com",
    databaseURL: "https://crwn-db-fdee4.firebaseio.com",
    projectId: "crwn-db-fdee4",
    storageBucket: "crwn-db-fdee4.appspot.com",
    messagingSenderId: "188124402983",
    appId: "1:188124402983:web:1f4e6b0efb693b77558502"
};


firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
