import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkkyIUpmcJownjdfrH5hA20D7mw-UbTz0",
    authDomain: "gpus-store.firebaseapp.com",
    projectId: "gpus-store",
    storageBucket: "gpus-store.appspot.com",
    messagingSenderId: "498416960127",
    appId: "1:498416960127:web:2c65d992a8f9195b3c354a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
