import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


// import 'firebase/storage';


const firebaseConfig = {
  // configuration details
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// export cons 

export default firebase
