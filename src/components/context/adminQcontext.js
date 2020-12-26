import React, { useContext, useEffect, useCallback, useState } from 'react';
import firebase from '../../firebase'


export const AdminQuestionContext = React.createContext({});

const AdminQuestionProvider = AdminQuestionContext.Provider;
const AdminQuestionConsumer = AdminQuestionContext.Consumer;

// function onAuthStateChange(callback) {
// make sure user register or login
// }

  // user is added or logged in and sent to all the components of this site through this context


export function AdminQuestionContextProvider(props) {

    

    // on useEffect fetch questions from the backend and save it in 'qs'

    const [allQs, setAllQs] = useState([])

    useEffect(() => {
        firebase.firestore().collection('questions').onSnapshot((thisisquery) => {
          const list = [];
          thisisquery.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          })
          setAllQs(list);
          console.log(list)
        })
      }, []);
  
  return (
    <AdminQuestionProvider value={[allQs, setAllQs]}>
    {props.children}
    </AdminQuestionProvider>
  );
}

