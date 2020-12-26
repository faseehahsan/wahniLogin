import { Redirect, Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/user1Context";
import "./quizScreen.css";
import QuestionCard from "./questionCard";
import Loader from "../../globalComponents/loader";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

function Home() {
  // user details and scores
  const userContextObject = useContext(UserContext);
  const user = userContextObject.user;
  const userScores = userContextObject.userScores;
  // shuffled questions
  const [questions, setQuestions] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // useHistory hook to redirect to '/Quiz' on login if registration is complete
  const history = useHistory();

  async function getQuestionsFromFirestore() {
    await firebase
      .firestore()
      .collection("questions")
      .limit(5)
      .get()
      .then((thisisquery) => {
        const list = [];
        thisisquery.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setQuestions(list);
        setIsLoading(false);
      })
      .catch((err) => {
        history.push("/Quiz");
        window.alert("couldnt fetch questions");
      });
  }

  useEffect(() => {
    // on component load, from the qs, array the questions are shuffled and randomized
    setIsLoading(true);
    getQuestionsFromFirestore();
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
  if (!user || !user.loggedIn ) return <Redirect to="/myAccount" />;

  if (user && !isLoading) {
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
  } else if (user && isLoading) {
    return (
      <div className="flexCenter body">
        <Loader borderWidth="5px" width="50px" />
      </div>
    );
  }
}

export default Home;
