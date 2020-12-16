import React, { useState } from 'react'
import Timer from './timer';


function QuestionCard(props) {

    const { currentQuestion, questions, prevQ, nextQ, submitQ, numberOfQ } = props

    // set an array of true or false and filter it to send it on submitQ
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const score = correctAnswer.filter(data => data === true).length;

    // set an array of answers that are selected in the order of questions appearing to set style to seleceted answers
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    function selectedAnswerClassName(clickedAnswer, indexure) {
        // to set style to clicked answers check if any of those answers are already clicked and set in the selectedAnswer array
        if (clickedAnswer === selectedAnswer[indexure]) {
            return 'button-selected'
        }
    }

    function answerClickHandler(answer, indexure, isCorrect) {
        // set selectedAnswer and CorrectAnswer arrays each time an answer is selected
        const newArray = [...selectedAnswer];
        newArray[indexure] = answer;
        setSelectedAnswer(newArray)

        const newArray1 = [...correctAnswer];
        newArray1[indexure] = isCorrect;
        setCorrectAnswer(newArray1);
        // navigate to next Question
        nextQ();
    }

    //check if time is OVER
    const [timeOver, setTimeOver] = useState(false);

    if (timeOver) {
        return (
            
            <div className='timeout'>

                    <div className='score-header'>TIMEOUT !!!</div>
                    
                    <div>
                        <div className='button1' onClick={() => submitQ(correctAnswer.filter(data => data === true).length)}>Click to see Score</div>

                    </div>
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
                        <button 
                            className={selectedAnswerClassName(answerOption.answerText, currentQuestion)} 
                            id='answerButton' 
                            onClick={() => {answerClickHandler(answerOption.answerText, currentQuestion, answerOption.isCorrect)}}
                            >
                            {answerOption.answerText}
                        </button>
                    ))}
                </div>

                <div className='next-and-prev-buttonsContainer'>
                    <div className='button1' onClick={prevQ}>PREV</div>
                    <div className='button1' onClick={nextQ}>Pass</div>
                </div>

                <div className='submitButtonContainer'>
                    <div className='submitButton' onClick={() => submitQ(score)}>Submit</div>
                </div>

                

                
            </div>
        );

    }





}

export default QuestionCard;
