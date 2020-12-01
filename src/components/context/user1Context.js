import React, { useContext, useEffect, useCallback, useState } from 'react';


const defaultUser = { loggedIn: false, email: "" };
export const UserContext = React.createContext({});

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

// function onAuthStateChange(callback) {
// make sure user register or login
// }

  // user is added or logged in and sent to all the components of this site through this context


export function UserContextProvider(props) {
  const [user, setUser] = useState({ loggedIn: true, mobile: '+9145665524', name: 'USER', id: 'adssda6546d8f', dp: 'www.sasad.asdsa.sdasd/' });

  // on useEffect user is authorized and user details are set and sent via context API to all components
  
  return (
    <UserProvider value={user}>
    {props.children}      
    </UserProvider>
  );
}

