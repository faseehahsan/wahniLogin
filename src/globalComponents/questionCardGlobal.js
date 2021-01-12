import React, { useState } from "react";
import "./questionCardGlobal.css";

function QuestionCardGlobal(props) {
  const [Hello, setHello] = useState(false);

  const { question, clickToSeeAnswer, answer, index } = props;

  function clickToSeeAnswer1() {
    clickToSeeAnswer(question.id, index);
    // forceUpdate;
    if (Hello) {
      setHello(false);
    } else {
      setHello(true);
    }
  }

  const idNameBasedOnAnswer = (option) => {
    if (option === answer) {
      return "answerButton2";
    } else {
      return "answerButton1";
    }
  };

  return (
    <div className="questionDiv1">
      <div className="flexContainFull fontMontserrat">
        <div>
          {/* <div className="question-count-timer">
            <span className="question-count">#{currentQuestion + 1}</span>

            <div className="timer">
              <div>{duration}</div>
            </div>
          </div> */}

          <div className="questionHeadText1">Question</div>
        </div>

        <div className="question-and-answer-section1">
          <div className="question-text1">{question.questionText}</div>

          <div className="answer-section1 wahniColor">
            {question.options.map((option) => (
              <div className="buttonOne" id={idNameBasedOnAnswer(option)}>
                {option}
              </div>
            ))}
            <div
              className="buttonOne showAnswerButton"
              id="answerButton1"
              onClick={() => clickToSeeAnswer1()}
            >
              Click to See Answer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCardGlobal;
