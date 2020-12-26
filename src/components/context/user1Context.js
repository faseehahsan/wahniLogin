import React, { useContext, useEffect, useCallback, useState } from 'react';
import firebase from '../../firebase'


const defaultUser = { loggedIn: false, email: "" };
export const UserContext = React.createContext({});

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

// function onAuthStateChange(callback) {
// make sure user register or login
// }

  // user is added or logged in and sent to all the components of this site through this context


export function UserContextProvider(props) {

  const [user, setUser] = useState({ loggedIn: false });
  const [userScores, setUserScores] = useState(null);

  function onAuthStateChange() {
    return firebase.auth().onAuthStateChanged(user1 => {
      if (user1) {

        setUser({ loggedIn: true, 
                  email: user1.email, 
                  name: user1.displayName, 
                  id: user1.uid, 
                  number: user1.phoneNumber,
                  photoURL: user1.photoURL });
        
        firebase
        .firestore()
        .collection(`users/${user1.uid}/scores`)
        .orderBy('attendedAt', 'desc')
        .limit(1)
        .onSnapshot((thisisquery) => {
          const list = [];
          thisisquery.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          })
          setUserScores(list);
        })
        .catch(err => {
          console.log('Unable to fetch user last score:', err)
        })
      } else {
        setUser({ loggedIn: false });
        setUserScores(null)
      }
    });
  }


  // on useEffect user is authorized and user details are set and sent via context API to all components

  useEffect(() => {
    const unsubscribe = onAuthStateChange();

    return () => {
      unsubscribe();
    }
  }, []);
  
  return (
    <UserProvider value={{'user': user, 'userScores': userScores}}>
    {props.children}      
    </UserProvider>
  );
}

