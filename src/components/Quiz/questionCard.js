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
  // check if first firebase operation is loading
  //basically there are two firebase calls here
  const [isLoading, setIsLoading] = useState(false);
  // check if second firebase opretion is loading
  const [isLoading1, setIsLoading1] = useState(false);

  // calculate score 
  const [score, setScore] = useState(0)

  useEffect(() => {
    if(timeOver) {
      if(!quizOver) {
        getCorrectAnswers()
      }
    } else {
      console.log('not over')
    }
    
  }, [duration])

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
      // set a loaading here
      setTimeOver(true)
      setDuration("TIME OUT");
      if(selectedAnswers[9] === 1) {
        console.log('timeout')
      } else {
        console.log('quiz aint over')
      }
      
    }, 30000);

    return () => clearInterval(interval);

  }, []);

  

  // set an array of correct answers
  const [correctAnswer, setCorrectAnswer] = useState([0,0,0,0,0,0,0,0,0,0]);

  // set an array of answers that are selected
  const [selectedAnswers, setSelectedAnswers] = useState([1,1,1,1,1,1,1,1,1,1]);

  function answerClickHandler(answer, indexure) {
    // set selectedAnswers arrays each time an answer is selected
    const newArray = [...selectedAnswers];
    newArray[indexure] = answer;
    setSelectedAnswers(newArray);
    console.log(newArray)
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
    const listTemp = []

    //loop over questions and get the answers
    await questions.map((q,i) => {

      firebase
      .firestore()
      .doc(`answers/${q.id}`)
      .get()
      .then(docSnap => {
        const answersingle = docSnap.data().answer;
        // set correct answers array
        // setCorrectAnswer(prevCorrectAnswer => [...prevCorrectAnswer.slice(0,i), answersingle, ...prevCorrectAnswer.slice(i+1,3)]);
        listTemp[i]=answersingle;
        // if everything is over set quiz over to true
        
        if(i === questions.length-1) {
          setIsLoading(false)
          // if(timeOver) {
          //   // set the timeover loader false
          // }
          setCorrectAnswer(listTemp)
          console.log(listTemp)
          console.log(selectedAnswers)

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
        console.log('coret')
        setScore(prevScore => prevScore + 1)
        arrayTest.push('correct')
      }
    }
    setIsLoading(true);
    setIsLoading1(true);
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
    //if not first time
    if (user && userScores.length > 0) {
      const lastScore = userScores[0].score;
      
      const newPercentageIncrease = () => {
        if(lastScore === 0) {
          return newScore*100
        } else {
          return (newScore-lastScore)/lastScore*100;
        }
      } 
      const newAttempt = userScores[0].attempt + 1;
      // set scores
      let newScoreObject = {
        'uid': user.id,
        'username': user.name,
        'score': newScore,
        'attempt': newAttempt,
        'perecentageIncrease': newPercentageIncrease(),
        'attendedAt': new Date()
      }
      submitting2firestore(newScoreObject)

      // update userDetails
      if (newScore > lastScore) {
        firebase.firestore()
        .doc(`users/${user.id}`)
        .update({
          'highestScore': newScore,
          'attempt': newAttempt,
          'updatedAt': new Date()
        })
        .then(res => {
          setIsLoading1(false)
          // console.log('high score updated')
        })
        .catch(err => {
          window.alert('unable to update your profile:', err)
          setIsLoading1(false)
        })
      } else {
        setIsLoading1(false)
      }
    
    }
    // if first time
    else {
      const username = () => {
        if (user.name === null || user.name === undefined || user.name === '') {
          return user.name
        }
        else {
          return 'Guest'
        }
      };
      // set scores
      let newScoreObject = {
        'uid': user.id,
        'username': username(),
        'score': newScore,
        'attempt': 1,
        'perecentageIncrease': null,
        'attendedAt': new Date(),
      };
      submitting2firestore(newScoreObject);

      // also add user details
      let userDetails2add = {
        'username': user.name,
        'uid': user.id,
        'totalAttempts': 1,
        'highestScore': newScore,
        'updatedAt': new Date(),
      }
      firebase
      .firestore()
      .doc(`users/${user.id}`)
      .set(userDetails2add)
      .then(res => {
        setIsLoading1(false)
        // console.log('new user details ADDED')
      })
      .catch(err => {
        window.alert('Unable to update your Profile :', err)
        setIsLoading1(false)
      })
    }

  }

  function submitting2firestore(newScoreObject) {
    firebase
      .firestore()
      .collection('rankings')
      .add(newScoreObject)
      .then(res => {
        
        // console.log('added to rankings')

        setIsLoading(false)
      })
      .catch(err => {
        // console.log('error')

        window.alert('Error updating the rankings')
        setIsLoading(false)
      })
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
        
        {
          isLoading ? 
          <Loader width='50px' borderWidth='6px' />
          :
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
        }
      </div>
    );
  }
  if ((timeOver && showScore) || showScore || (quizOver && showScore)) {
    return (
      <div className="flexContainFull flexCenter">
        {(isLoading || isLoading1) ? 

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
            {questions[currentQuestion].options.map((option, answerIndex) => (
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
                {answerIndex+1}. {option}
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

export default QuestionCard;
