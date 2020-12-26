import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import Loader from "../../globalComponents/loader";


function QuestionCard(props) {

  //from props
  const {
    currentQuestion,
    nextQ,
    submitQ,
    questions,
    // users from context
    user,
    userScores
  } = props;
  // duration to track timer
  const [duration, setDuration] = useState(30);
  //check if time is OVER
  const [timeOver, setTimeOver] = useState(false);
  //check if quiz is over
  const [quizOver, setQuizOver] = useState(false);
  //check if show score is true
  const [showScore, setShowScore] = useState(false);
  //check if something is loading
  const [isLoading, setIsLoading] = useState(false);
  // calculate score 
  const [score, setScore] = useState(0)

  useEffect(() => {
    var timesRun = 0;
    const interval = setInterval(() => {
      if (!timeOver) {
        setDuration((duration) => duration - 1);
        timesRun += 1;
        if(timesRun === 30){
        clearInterval(interval);
    }
      } else {
        clearInterval(interval)
      }
    }, 1000);

    setTimeout(() => {
      setTimeOver(true);
      setDuration("TIME OUT");

    }, 30000);

    return () => clearInterval(interval);

  }, []);

  

  // set an array of correct answers
  const [correctAnswer, setCorrectAnswer] = useState([0,0,0,0,0]);

  // set an array of answers that are selected
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  function answerClickHandler(answer, indexure) {
    // set selectedAnswers arrays each time an answer is selected
    const newArray = [...selectedAnswers];
    newArray[indexure] = answer;
    setSelectedAnswers(newArray);

    // navigate to next Question
    let nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      nextQ(nextQuestion);
    } else {
      setQuizOver(true)
      setIsLoading(true)
      // submit answers
      getCorrectAnswers();
    }
  }

  async function getCorrectAnswers() {
    
    //loop over questions and get the answers
    await questions.forEach((q,i) => {
      

      firebase
      .firestore()
      .doc(`answers/${q.id}`)
      .get()
      .then(docSnap => {
        const answersingle = docSnap.data().answer;
        // set correct answers array
        setCorrectAnswer(prevCorrectAnswer => [...prevCorrectAnswer.slice(0,i), answersingle, ...prevCorrectAnswer.slice(i+1,3)]);
        // if everything is over set quiz over to true
        if(i === questions.length-1) {
          setIsLoading(false)
        }
      })
      .catch(err => {
        setIsLoading(false)
        window.alert('Error fetching answers from firestore')

      })
    })
  }

  function onClickToSeeScore() {
    let arrayTest = []
    for (let i = 0; i < questions.length; i++) {
      if(selectedAnswers[i] === correctAnswer[i]) {
        setScore(prevScore => prevScore + 1)
        arrayTest.push('correct')
      }
    }
    setIsLoading(true);
    setShowScore(true);
    // send to firestore
    if (user && user.loggedIn) {
      createScoreObject2submit2firestore(arrayTest.length);
    } else {
      window.alert('You are not logged In')
      setIsLoading(false)
    }
    
  }

  function createScoreObject2submit2firestore(newScore) {

    if (user && userScores.length > 0) {
      const lastScore = userScores[0].score;
      const newPercentageIncrease = (newScore-lastScore)/lastScore*100;
      const newAttempt = userScores[0].attempt + 1;
      
      let newScoreObject = {
        'score': newScore,
        'attempt': newAttempt,
        'perecentageIncrease': newPercentageIncrease,
        'attendedAt': new Date()
      }

      submitting2firestore(newScoreObject)
    
    }
    else {
      let newScoreObject = {
        'score': newScore,
        'attempt': 1,
        'perecentageIncrease': null,
        'attendedAt': new Date()
      }
      submitting2firestore(newScoreObject)
    }

  }

  function submitting2firestore(newScoreObject) {
    firebase
    .firestore()
    .collection(`users/${user.id}/scores`)
    .add(
      newScoreObject
    )
    .then(res => {
      console.log('added to database')

      firebase
      .firestore()
      .collection('rankings')
      .add(
        {
          ...newScoreObject,
          'uid': user.id,
          'username': user.name,
        }
      )
      .then(res => {
        
        console.log('added to rankings')

        setIsLoading(false)
      })
      .catch(err => {
        console.log('error')

        window.alert('Error updating the rankings')
        setIsLoading(false)
      })

    })
    .catch(err => {
      console.log('error')

      setIsLoading(false)
      window.alert('Error updating your profile')
    });
  }


  if (quizOver && !showScore) {
    return (
      <div className="flexContainFull flexCenter fontMontserrat">
        {
          isLoading ? 
          <Loader width='50px' borderWidth='6px' />
          :
          <div className="timeOutContainer">
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>You have completed the Quiz</p>
          <div
            className="buttonOne wahniColor retryButton"
            onClick={() =>
              onClickToSeeScore()
            }
          >
            Click to see Score
          </div>
        </div>
        }
      </div>
    );
  }
  if (timeOver && !showScore && !quizOver) {
    return (
      <div className="flexContainFull flexCenter fontMontserrat">
        
        <div className="timeOutContainer">
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>TIMEOUT</p>
          <div
            className="buttonOne wahniColor retryButton"
            onClick={() =>
              onClickToSeeScore()
            }
          >
            Click to see Score
          </div>
        </div>
      </div>
    );
  }
  if ((timeOver && showScore) || showScore || (quizOver && showScore)) {
    return (
      <div className="flexContainFull flexCenter">
        {isLoading ? 

        <Loader width='50px' borderWidth='6px' />

          :

          <div className="scoreContainer">
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            Congratulations
          </p>
          <p style={{ fontSize: "18px" }}>You scored</p>
          <div className="scoreNumber">
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{score}</p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 15,
                fontSize: "22px",
                fontFamily: "sans-serif",
                marginLeft: 5,
              }}
            >
              / {questions.length}
            </p>
          </div>
          <Link className="link buttonOne wahniColor retryButton" to="/Quiz">
            Retry
          </Link>
        </div>

      }
        
      </div>
    );
  } else {
    return (
      <div className="flexContainFull fontMontserrat">
        <div>
          <div className="question-count-timer">
            <span className="question-count">#{currentQuestion + 1}</span>

            <div className="timer">
              <div>{duration}</div>
            </div>
          </div>

          <div className="questionHeadText">Question</div>
        </div>

        <div className="question-and-answer-section">
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>

          <div className="answer-section wahniColor">
            {questions[currentQuestion].options.map((option) => (
              <div
                className="buttonOne"
                id="answerButton"
                onClick={() => {
                  answerClickHandler(
                    option,
                    currentQuestion
                  );
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

export default QuestionCard;
