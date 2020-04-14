import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAeGKNudJC_Teli-84w0svlch5gCv24w5c",
    authDomain: "personal-site-5d5d3.firebaseapp.com",
    databaseURL: "https://personal-site-5d5d3.firebaseio.com",
    projectId: "personal-site-5d5d3",
    storageBucket: "personal-site-5d5d3.appspot.com",
    messagingSenderId: "939781363047",
    appId: "1:939781363047:web:818cc0150c47df1b244bc2",
    measurementId: "G-HQBCPHZ9FH"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;