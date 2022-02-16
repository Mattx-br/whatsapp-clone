import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, collection, addDoc } from "firebase/firestore"

import { getStorage } from 'firebase/storage';

// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");


// import * as firestore from 'firebase/storage';

export class Firebase {

    constructor() {

        // Your web app's Firebase configuration
        this._config = {
            apiKey: "AIzaSyCZXRckVuVF6Gsg5I9Fqgt6tMzRcQImDE0",
            authDomain: "whatsapp-clone-5f5b5.firebaseapp.com",
            projectId: "whatsapp-clone-5f5b5",
            storageBucket: "whatsapp-clone-5f5b5.appspot.com",
            messagingSenderId: "348770137596",
            appId: "1:348770137596:web:207a69d5eb687e414fae79"
        };

        this.init();

        this.firebaseApp = initializeApp(this._config);



    }

    DetectAuthState(auth) {
        onAuthStateChanged(auth, user => {
            if (user != null) {
                console.log('logado!');
            } else {
                console.log("Sem usuário");
            }
        });
    }

    init() {
        if (!window.initializedFirestore) {
            // Initialize Firebase
            const firebaseApp = initializeApp(this._config);

            this.db = getFirestore(this.firebaseApp);
            this.hd = getStorage(this.firebaseApp);


            window.initializedFirestore = true;
        }
    }

    static database() {
        const db = getFirestore();
        return db;
    }

    // static hd() {
    //     // const hd = getStorage(this.firebaseApp);
    //     return this.hd;

    // }



    initAuth() {
        return new Promise((s, f) => {

            const provider = new GoogleAuthProvider();

            const auth = getAuth();

            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);

                    const token = credential.accessToken;
                    const user = result.user;
                    s({ user, token });

                }).catch((err) => {

                    f(err);
                    // // Handle Errors here.
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    // // The email of the user's account used.
                    // const emanpil = error.email;
                    // // The AuthCredential type that was used.
                    // const credential = GoogleAuthProvider.credentialFromError(error);
                    // console.error(err);
                });
        })
    }

}