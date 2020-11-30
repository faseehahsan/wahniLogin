import React, { useContext, useEffect, useCallback, useState } from 'react';


const defaultUser = { loggedIn: false, email: "" };
export const UserContext = React.createContext({});

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

function onAuthStateChange(callback) {

  const user = true

  if (user) {
      callback({ loggedIn: true, mobile: '+9145665524', name: 'USER', id: 'adssda6546d8f', dp: 'www.sasad.asdsa.sdasd/' });
    } else {
      callback({ loggedIn: false });
    }
}

export function UserContextProvider(props) {
  const [user, setUser] = useState({ loggedIn: false });
//   const userName1 = firebase.auth().currentUser.displayName;
  const [error, setError] = useState("");
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChange(setUser);
  //   return () => {
  //     unsubscribe();
  //   }
  // }, []);
  
  return (
    <UserProvider value={user}>
    {props.children}      
    </UserProvider>
  );
}

