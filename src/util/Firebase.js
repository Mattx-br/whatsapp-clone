import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

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
    }

    init() {
        if (!this.initialized) {
            // Initialize Firebase
            const app = initializeApp(this._config);

            // app.getFirestore();


            this.initialized = true;
        }
    }

    static db() {
        const db = getFirestore();
        return db;
    }

    static hd() {

        return firebase.getStorage();

    }

}