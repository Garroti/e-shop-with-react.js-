import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBX3WWSlHgNl2IQVpCYuvNhZpof0Jqg2Rk",
    authDomain: "e-shop-84532.firebaseapp.com",
    databaseURL: "https://e-shop-84532.firebaseio.com",
    projectId: "e-shop-84532",
    storageBucket: "e-shop-84532.appspot.com",
    messagingSenderId: "644940179686",
    appId: "1:644940179686:web:946284dc41f81b8797b327",
    measurementId: "G-VJM9D7V2NY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;