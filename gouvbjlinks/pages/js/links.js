// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

var firebaseConfig = {
    apiKey: "AIzaSyBaOA4K7IlX738P_x1wlklctV40-bx2hyQ",
    authDomain: "gouv-bj-links-a55f2.firebaseapp.com",
    projectId: "gouv-bj-links-a55f2",
    storageBucket: "gouv-bj-links-a55f2.appspot.com",
    messagingSenderId: "406250189735",
    appId: "1:406250189735:web:34711616e8fed75559fc82",
    measurementId: "G-VJ11EN2GBH"
};
 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const COLLECTION_LINKS = "Links";
const links = app.collection(COLLECTION_LINKS);

async function linksManagment() {
    links
    .snapshots().then(function(snapshot) {
        console.log(snapshot.val());
    });
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;

    // Faire une requête à Firebase
    /*app.database().collection(FirestoreCollectionsNames.COLLECTION_LINKS).once("value").then(function(snapshot) {
        console.log(snapshot.val());
    });*/
};
 

window.onload = function() {
    linksManagment();
};
