import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function QuestionCard(props) {
  const [duration, setDuration] = useState(30);
  //check if time is OVER
  const [timeOver, setTimeOver] = useState(false);

  useEffect(() => {
    console.log("rendered1");
    const interval = setInterval(() => {
      if (!timeOver) {
        setDuration((duration) => duration - 1);
      }
    }, 1000);

    setTimeout(() => {
      setTimeOver(true);
      setDuration("TIME OUT");
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const {
    currentQuestion,
    questions,
    prevQ,
    nextQ,
    submitQ,
    numberOfQ,
    showScore,
  } = props;

  // set an array of true or false and filter it to send it on submitQ
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const score = correctAnswer.filter((data) => data === true).length;

  // set an array of answers that are selected in the order of questions appearing to set style to seleceted answers
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  function selectedAnswerClassName(clickedAnswer, indexure) {
    // to set style to clicked answers check if any of those answers are already clicked and set in the selectedAnswer array
    if (clickedAnswer === selectedAnswer[indexure]) {
      return "button-selected";
    }
  }

  function answerClickHandler(answer, indexure, isCorrect) {
    // set selectedAnswer and CorrectAnswer arrays each time an answer is selected
    const newArray = [...selectedAnswer];
    newArray[indexure] = answer;
    setSelectedAnswer(newArray);

    const newArray1 = [...correctAnswer];
    newArray1[indexure] = isCorrect;
    setCorrectAnswer(newArray1);
    // navigate to next Question
    let nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      nextQ(nextQuestion);
    } else {
      submitQ(score);
    }
  }

  if (timeOver && !showScore) {
    return (
      <div className="flexContainFull flexCenter fontMontserrat">
        <div className="timeOutContainer">
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>TIMEOUT</p>
          <div
            className="buttonOne wahniColor retryButton"
            onClick={() =>
              submitQ(correctAnswer.filter((data) => data === true).length)
            }
          >
            Click to see Score
          </div>
        </div>
      </div>
    );
  }
  if ((timeOver && showScore) || showScore) {
    return (
      <div className="flexContainFull flexCenter">
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
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <div
                className="buttonOne"
                id="answerButton"
                onClick={() => {
                  answerClickHandler(
                    answerOption.answerText,
                    currentQuestion,
                    answerOption.isCorrect
                  );
                }}
              >
                {answerOption.answerText}
              </div>
            ))}
          </div>
        </div>

        {/* <div className='next-and-prev-buttonsContainer'>
                    <div className='button1' onClick={prevQ}>PREV</div>
                    <div className='button1' onClick={nextQ}>Pass</div>
                </div>

                <div className='submitButtonContainer'>
                    <div className='submitButton' onClick={() => submitQ(score)}>Submit</div>
                </div> */}
      </div>
    );
  }
}

export default QuestionCard;
