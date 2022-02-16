import { Firebase } from './../util/Firebase';
import { collection, addDoc, query, where, get } from 'firebase/firestore';

import { ClassEvent } from '../util/ClassEvent';
export class User extends ClassEvent {

    static getFirestoreDatabase() {
        return Firebase.database();
    }

    static userCollection() {
        let db = this.getFirestoreDatabase();
        return collection(db, '/user');
    }

    static getRef() {
        let db = Firebase.database();
        userCollection = collection(db, '/user');
        try {

            // return Firebase.db().collection(db, '/users');
            return col;

        } catch (e) {
            console.error('erro em pegar referencias');
        }
        // try {
        //     const docRef = addDoc(collection(db, "users"), {
        //         first: "Ada",
        //         last: "Lovelace",
        //         born: 1815
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //     console.error("Error adding document: ", e);
        // }
    }

    static findingByEmail(email) {
        let userCollection = User.userCollection();
        var a = query(userCollection, where('email' == email))
        console.log(get(query));
        return get(query);
    }
}