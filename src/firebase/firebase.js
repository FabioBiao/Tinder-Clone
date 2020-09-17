import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWdlByv0rftQqBcfwFComAjB83IkFn-es",
    authDomain: "tinder-clone-ad20f.firebaseapp.com",
    databaseURL: "https://tinder-clone-ad20f.firebaseio.com",
    projectId: "tinder-clone-ad20f",
    storageBucket: "tinder-clone-ad20f.appspot.com",
    messagingSenderId: "133659845231",
    appId: "1:133659845231:web:fe9bf4a9072d7ab76d239a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;