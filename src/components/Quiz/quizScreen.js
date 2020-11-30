import { NavLink } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import './quizScreen.css';
import Timer from './timer';
import QuestionCard from './questionCard'

function Home() {

    

    const [started, setStarted] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	

	const handleAnswerOptionClick = (isCorrect) => {

		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
        }
        
    };

    function nextQ() { 
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    }
    function prevQ() {
        if (currentQuestion > 0) {
            const nextQuestion = currentQuestion - 1;
        setCurrentQuestion(nextQuestion);
        }
        

    }
    
    if (started) {
        return (
        
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <div>
                        {/* <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>

                                <div>
                        <div onClick={prevQ}>Go back</div>
                        <div onClick={nextQ}>Next</div>
                        </div> */}

                        <QuestionCard 
                            currentQuestion={currentQuestion} 
                            questions={questions[currentQuestion]} 
                            handleAnswerOptionClick={handleAnswerOptionClick} 
                            prevQ={prevQ} 
                            nextQ={nextQ} />

                    </div>
                )}
                <Timer setShowScore={setShowScore} showScore={showScore} />
            </div>
        )
    } else {
        return (
            <div>

            <button onClick={() => setStarted(true)}>
                START
            </button>
            
            <button>
                RANKINGS
            </button>

            </div>
        )
    }
	
}

export default Home;
