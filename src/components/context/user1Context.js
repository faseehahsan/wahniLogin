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

  function onAuthStateChange() {
    return firebase.auth().onAuthStateChanged(user1 => {
      if (user1) {
        setUser({ loggedIn: true, 
                  email: user1.email, 
                  name: user1.displayName, 
                  id: user1.uid, 
                  number: user1.phoneNumber,
                  photoURL: user1.photoURL });
      } else {
        setUser({ loggedIn: false });
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
    <UserProvider value={user}>
    {props.children}      
    </UserProvider>
  );
}

