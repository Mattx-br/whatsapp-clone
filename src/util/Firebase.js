// const firebase = require('firebase');
// require('firebase/firestore')

export class Firebase {
    constructor() {

        this._config = {

            apiKey: "AIzaSyCCduqsB98_w317r8P7UewwPf6VoDd2_u8",

            authDomain: "whatsappclone-600bc.firebaseapp.com",

            projectId: "whatsappclone-600bc",

            storageBucket: "whatsappclone-600bc.appspot.com",

            messagingSenderId: "135487792709",

            appId: "1:135487792709:web:5f5b8e44a199e6de58e52c"

        };



        this.init();

    }

    init() {
        if (!window._initializedFirebase) {

            firebase.initializeApp(this._config);

            firebase.firestore();
            const settings = { timestampsInSnapshots: true };

            firebase.firestore().settings(settings);

            // const timestamp = snapshot.get('created_at');

            // const date = timestamp.toDate();

            window._initializedFirebase = true;
        }


    }

    static db() {

        return firebase.firestore()

    }

    static hd() {
        console.log('carrego o storage');
        return firebase.storage();

    }

    initAuth() {
        return new Promise((s, f) => {

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then(result => {

                    let token = result.credential.accessToken;

                    let user = result.user;

                    s({ user, token });

                })
                .catch(err => {
                    f(err)
                });

        })
    }
}