import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./context/user1Context";
import Loader from "../globalComponents/loader";
import axios from "axios";
import firebase from '../firebase'

function Home() {
  const [questions, setQuestions] = useState("");

  const uniqueRandom = require('unique-random');

  const userContextObject = useContext(UserContext);

  // function getRandomNumber(min, max) {
  //   return Math.ceil(Math.random() * (max - min) + min);
  // }

  // async function getQuestionsFromFirestore() {
  //   // fetch the last added question doc from firestore
  //   console.log('started getting 1st document')
  //   firebase
  //     .firestore()
  //     .collection("questions")
  //     .orderBy("createdAt", "desc")
  //     .limit(1)
  //     .get()
  //     .then((docData) => {
  //       const list1 = [];
  //       docData.forEach((doc) => {
  //         list1.push({ ...doc.data(), id: doc.id });
  //       });
  //       console.log(`got 1st doc with index : ${list1[0].index}`)
  //       // check if list has an object with index
  //       if (list1.length > 0) {
  //         const totalQuestions = list1[0].index;

  //         // check if total questions is below 10 or 100 or 1000
  //         const divisibleNumber = () => {
  //           if (totalQuestions < 10) {
  //             return 10;
  //           } else if (totalQuestions < 100) {
  //             return 10;
  //           } else if (totalQuestions < 1000) {
  //             return 100;
  //           } else if (totalQuestions < 10000) {
  //             return 1000;
  //           }
  //         };
  //         console.log(`disvisible number : ${divisibleNumber()}`)
  //         const randomNumbersArrayLength =
  //           Math.floor(totalQuestions / divisibleNumber()) + 1;

  //         console.log(`randomNumbersArrayLength: ${randomNumbersArrayLength}`)
  //         // get a random number between 1 and random numbers array length
          
  //         const aRandomNumber = getRandomNumber(0.5, randomNumbersArrayLength);

  //         console.log(`random: ${aRandomNumber}`)

  //         // based on this random number generated, get questions
  //         if (aRandomNumber < randomNumbersArrayLength) {
  //           console.log(`fetching docs less than multiple of 10`)
  //           firebase
  //             .firestore()
  //             .collection("questions")
  //             .where("index", "<=", aRandomNumber * divisibleNumber())
  //             .limit(divisibleNumber())
  //             .get()
  //             .then((docData2) => {
  //               console.log(`number of docs fetched: ${aRandomNumber * divisibleNumber()}`)
  //               const list2 = [];
  //               docData2.forEach((doc) => {
  //                 list2.push({ ...doc.data(), id: doc.id });
  //               });
  //               // randomise list
  //               const randomNumber = uniqueRandom(1, list2.length-1);
  //               const newArray = [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()]
  //               const newQuestionsArray = [];
  //               for (let i = 0; i < newArray.length; i++) {
  //                 console.log(`added ${i} questions with index ${newArray[i]}`)
  //                 newQuestionsArray.push(list2[newArray[i]])
  //               }
  //               setQuestions(newQuestionsArray);
  //               // setIsLoading(false);
  //             })
  //             .catch((err) => {
  //               // history.push("/Quiz");
  //               window.alert("couldnt fetch questions");
  //             });
  //         } else {
  //           console.log(`fetching docs after: index ${(aRandomNumber - 1) * divisibleNumber()} `)
  //           firebase
  //             .firestore()
  //             .collection("questions")
  //             .where("index", ">=", (aRandomNumber - 1) * divisibleNumber())
  //             .limit(divisibleNumber())
  //             .get()
  //             .then((docData3) => {
  //               const list3 = [];
  //               docData3.forEach((doc) => {
  //                 list3.push({ ...doc.data(), id: doc.id });
  //               });
  //               if (list3.length < 5) {
  //                 console.log(`if fetched docs are low : ${list3.length}`)
  //                 firebase
  //                   .firestore()
  //                   .collection("questions")
  //                   .where(
  //                     "index",
  //                     "<",
  //                     (aRandomNumber - 1) * divisibleNumber()
  //                   )
  //                   .limit(divisibleNumber())
  //                   .get()
  //                   .then((thisisquery1) => {
  //                     thisisquery1.forEach((doc) => {
  //                       list3.push({ ...doc.data(), id: doc.id });
  //                     });
  //                     console.log(`fetched even more docs : ${list3.length}`)

  //                     // randomise list 
  //                     const randomNumber3a = uniqueRandom(1, list3.length -1);
  //               const newArray3a = [randomNumber3a(), randomNumber3a(), randomNumber3a(), randomNumber3a(), randomNumber3a()]
  //               console.log(`randomeNumbers are: ${newArray3a}`)
  //               const newQuestionsArray3a = [];
  //               for (let i = 0; i < newArray3a.length; i++) {
  //                 newQuestionsArray3a.push(list3[newArray3a[i]])
  //               }
  //                     setQuestions(newQuestionsArray3a);
  //                     // setIsLoading(false);
  //                   })
  //                   .catch((err) => {
  //                     // history.push("/Quiz");
  //                     window.alert("couldnt fetch questions");
  //                   });
  //               } else {
  //                 console.log(`if fetched docs are enough : ${list3.length}`)

  //                 // randomise list
  //               const randomNumber3 = uniqueRandom(1, list3.length-1);
  //               const newArray3 = [randomNumber3(), randomNumber3(), randomNumber3(), randomNumber3(), randomNumber3()]
  //               const newQuestionsArray3 = [];
  //               for (let i = 0; i < newArray3.length; i++) {
  //                 newQuestionsArray3.push(list3[newArray3[i]])
  //               }
  //                 setQuestions(newQuestionsArray3);
  //                 // setIsLoading(false);
  //               }
  //             })
  //             .catch((err) => {
  //               // history.push("/Quiz");
  //               window.alert("couldnt fetch questions");
  //             });
  //         }
  //       }
  //     })
  //     .catch(err => {
  //       window.alert('Unable to Reach backend', err)
  //     });
  // }

  // useEffect(() => {
  //   // on component load, from the qs, array the questions are shuffled and randomized
  //   getQuestionsFromFirestore();
  // }, []);

  function clickHandler() {

    console.log(userContextObject)
  }

  return (
    <div>
      <h1>WahniHome</h1>
      <button onClick={() => clickHandler()}>fetch</button>
      {/* <QuestionCardGlobal /> */}
    </div>
  );
}

export default Home;
