import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./context/user1Context";
import Loader from "../globalComponents/loader";
import axios from "axios";
import firebase from '../firebase'

function Home() {
  const userContextObject = useContext(UserContext);
  // const [array1, setarray1] = useState([])

  // useEffect(() => {
  //   firebase.firestore().collection('questions').onSnapshot((thisisquery) => {
  //     const list = [];
  //     thisisquery.forEach((doc) => {
  //       list.push({ ...doc.data(), id: doc.id });
  //     })
  //     setarray1(list);
  //   })
  // }, []);

  function clickHandler() {
    console.log('this is score: ',userContextObject.userScores)
    console.log('this is USER: ',userContextObject.user)
    console.log('this is USER details: ',userContextObject.userDetails)
    window.prompt('Enter')
  }

  return (
    <div>
      <h1>WahniHome</h1>
      <button onClick={() => clickHandler()}>fetch</button>
    </div>
  );
}

export default Home;
