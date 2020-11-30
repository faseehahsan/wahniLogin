import React from 'react'

function questionCard(props) {

    const {currentQuestion, questions, prevQ, nextQ, handleAnswerOptionClick} = props

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
                    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
            </div>

            <div>
                <div onClick={prevQ}>Go back</div>
                <div onClick={nextQ}>Next</div>
            </div>

        </div>



    );
}

export default questionCard;
