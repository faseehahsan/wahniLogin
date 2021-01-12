import { Redirect, Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/user1Context";
import "./quizScreen.css";
import QuestionCard from "./questionCard";
import Loader from "../../globalComponents/loader";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

function Home() {
  const uniqueRandom = require("unique-random");
  function random(range) {
    return uniqueRandom(1, range);
  }
  // user details and scores
  const userContextObject = useContext(UserContext);
  const user = userContextObject.user;
  const userScores = userContextObject.userScores;
  const userScoresLoading = userContextObject.userScoresLoading;
  const userDetailsLoading = userContextObject.userDetailsLoading;
  // shuffled questions
  const [questions, setQuestions] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // useHistory hook to redirect to '/Quiz' on login if registration is complete
  const history = useHistory();

  function getRandomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  async function getQuestionsFromFirestore() {
    // fetch the last added question doc from firestore
    // console.log("started getting 1st document");
    firebase
      .firestore()
      .collection("questions")
      .orderBy("createdAt", "desc")
      .get()
      .then((docData) => {
        const list1 = [];
        docData.forEach((doc) => {
          list1.push({ ...doc.data(), id: doc.id });
        });
        // 
        const randomNumber = uniqueRandom(1, list1.length - 1);
        const randomQuestionNumberArray = [
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
          randomNumber(),
        ];
        const randomQuestionsArray = [];

        if (list1.length >= 10) {
          for (let i = 0; i < randomQuestionNumberArray.length; i++) {
            
            randomQuestionsArray.push(list1[randomQuestionNumberArray[i]]);
          }

          setQuestions(randomQuestionsArray);
          setIsLoading(false);
        } else {
          history.push("/Quiz");
          window.alert("Not enough questions");
        }
      })
      .catch((err) => {
        window.alert("Unable to Reach backend", err);
        history.push("/Quiz");
      });
  }

  useEffect(() => {
    if(user && user.loggedIn) {
      setIsLoading(true);
    getQuestionsFromFirestore();
    }
  }, []);

  // question Index to be shown to the user
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // calculate scores=
  const [score, setScore] = useState(0);
  // when timeOut or onSubmit the score is shown (showscore set to true)
  const [showScore, setShowScore] = useState(false);

  // fetch score hsitory of user from backend to send both score and percentage increase to backend for rankings

  function nextQ(nextQuestion) {
    setCurrentQuestion(nextQuestion);

    // const nextQuestion = currentQuestion + 1;
    // if (nextQuestion < questions.length) {
    // }
  }

  function submitQ(score) {
    setScore(score);
    setShowScore(true);

    // score with user id is sent to backEnd to store with new Date()
  }

  // if there is no user logged in this is redirected to myAccount for login or register
  if (!user || !user.loggedIn) return <Redirect to="/" />;
  if (user && (user.name === null || user.name === undefined || user.name === '')) return <Redirect to="/" />;

  if (user && !isLoading && !userScoresLoading && !userDetailsLoading) {
    return (
      <div className="body">
        <div className="questionDiv">
          <QuestionCard
            currentQuestion={currentQuestion}
            nextQ={nextQ}
            submitQ={submitQ}
            questions={questions}
            user={user}
            userScores={userScores}
          />
        </div>
      </div>
    );
  } else if (
    (user && isLoading) ||
    (user && userScoresLoading) ||
    (user && userDetailsLoading)
  ) {
    return (
      <div className="flexCenter body">
        <Loader borderWidth="5px" width="50px" />
      </div>
    );
  }
}

export default Home;
