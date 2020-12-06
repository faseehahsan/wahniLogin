import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


// import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBSjXNfUFdgJn3qCJPG3qWd5WEBTBKCICU",
    authDomain: "wahnilogin.firebaseapp.com",
    projectId: "wahnilogin",
    storageBucket: "wahnilogin.appspot.com",
    messagingSenderId: "571694906479",
    appId: "1:571694906479:web:908412aa21b16453d7619a"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// export cons 

export default firebase