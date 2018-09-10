import * as firebase from 'firebase';
import React from "react";
import firestore from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDtSJxuuGgGESqhlq7u6xliJ1KlB52tMZM",
    authDomain: "pickytalk.firebaseapp.com",
    databaseURL: "https://pickytalk.firebaseio.com",
    projectId: "pickytalk",
    storageBucket: "pickytalk.appspot.com",
    messagingSenderId: "389373704128"
};

// admin.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firestore // Do not remove this
const settings = { timestampsInSnapshots: true };
db.settings(settings);

export function getDb() {
    return db;
}

export function readAllUsers() {
    const users = db.collection("users");
    users.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            console.log(doc.id, " => ", doc.data());
        });
    });
}

export function readCollectionById(collection, name) {
    const docRef = db.collection(collection).doc(name);
    return new Promise((resolve, reject) => {
        docRef.get().then((doc) => {
            resolve(doc.data());
        }).catch(function(error) {
            reject(error);
        });
    });
}

export function readCollectionByCondition(collection, attribute, value) {
    const docRef = db.collection(collection);
    const query = docRef.where(attribute, '==', value);
    return new Promise((resolve, reject) => {
        query.get().then(function(results) {
            if(results.empty) {
                reject("No documents found!");
            } else {
                const result = [];
                results.forEach(function (doc) {
                    result.push(doc.data());
                });
                resolve(result);
            }
        }).catch(function(error) {
            reject(error);
        });
    });
}

export function readCollection(collection, name) {
    const docRef = db.collection(collection).doc(name);
    return new Promise((resolve, reject) => {
        docRef.get().then((doc) => {
            resolve(doc.data());
        }).catch(function(error) {
            reject(error);
        });
    });
}
