import * as firebase from 'firebase';
import React from "react";
import * as firestore from 'firebase/firestore';

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
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

export default function readAllUsers() {
	var users = db.collection("users");
	users.get().then(function(querySnapshot) {
		querySnapshot.forEach(function (doc) {
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.id, " => ", doc.data());
		});
	});
}
