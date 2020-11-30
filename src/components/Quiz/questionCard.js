import React, { useState } from 'react'

function QuestionCard(props) {

    const {currentQuestion, questions, prevQ, nextQ, submitQ} = props

    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState([]);

    function selectedTrue(clickedAnswer, indexure) {
        if(clickedAnswer === selectedAnswer[indexure]) {
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

    return (
        <div>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question {currentQuestion + 1}</span>/5
                </div>
                <div className='question-text'>{questions.questionText}</div>
            </div>
            <div className='answer-section'>
                {questions.answerOptions.map((answerOption) => (
                    <button className={selectedTrue(answerOption.answerText, currentQuestion)} onClick={() => {
                    newSelectedAnswerArray(answerOption.answerText, currentQuestion, answerOption.isCorrect);
                    }}>
                    {answerOption.answerText}
                    </button>
                ))}
            </div>

            <div>
                <div onClick={prevQ}>Go back</div>
                <div onClick={nextQ}>Next</div>
                <div onClick={() => submitQ(correctAnswer.filter(data => data === true).length)}>Submit</div>
            </div>

        </div>



    );
}

export default QuestionCard;
