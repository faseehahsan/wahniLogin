import React, { useState, useEffect } from 'react'
import Timer from './timer';


function QuestionCard(props) {

    const { currentQuestion, questions, prevQ, nextQ, submitQ, numberOfQ } = props

    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState([]);

    const [timeOver, setTimeOver] = useState(false);



    function selectedTrue(clickedAnswer, indexure) {
        if (clickedAnswer === selectedAnswer[indexure]) {
            return 'button-selected'
        }
    }

    function newSelectedAnswerArray(answer, indexure, isCorrect) {
        const newArray = [...selectedAnswer];
        newArray[indexure] = answer;
        setSelectedAnswer(newArray)

        const newArray1 = [...correctAnswer];
        newArray1[indexure] = isCorrect;
        setCorrectAnswer(newArray1)

    }


    if (timeOver) {
        return (
            <div>
                <div>TIMEOUT</div>
                <div onClick={() => submitQ(correctAnswer.filter(data => data === true).length, 'TIMEOUT')}>Click to see Score</div>
            </div>
        )
    } else {
        return (
            <div className='question-container'>
                <div className='question-section'>
                    <div className='question-count-timer'>
                    <div className='question-count'>
                    <span>Question {currentQuestion + 1}</span>/ {numberOfQ}
                    </div>
                        <div className='timer'>
                        <Timer timeOver={timeOver} setTimeOver={setTimeOver} />
                        </div>

                    </div>
                    <div className='question-text'>{questions.questionText}</div>
                </div>
                <div className='answer-section'>
                    {questions.answerOptions.map((answerOption) => (
                        <button className={selectedTrue(answerOption.answerText, currentQuestion)} id='answerButton' onClick={() => {
                            newSelectedAnswerArray(answerOption.answerText, currentQuestion, answerOption.isCorrect);
                        }}>
                            {answerOption.answerText}
                        </button>
                    ))}
                </div>

                <div className='submitButtonContainer'>
                    <div className='submitButton' onClick={() => submitQ(correctAnswer.filter(data => data === true).length, 'Congatulations')}>Submit</div>
                </div>

                <div className='buttonsContainer'>
                    <div className='button1' onClick={prevQ}>Go back</div>
                    <div className='button1' onClick={nextQ}>Next</div>
                </div>

                
            </div>
        );

    }





}

export default QuestionCard;
