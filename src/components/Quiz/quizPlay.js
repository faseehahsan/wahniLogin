import { Redirect, Link } from 'react-router-dom';
import React, {useState, useContext } from 'react';
import { UserContext } from '../context/user1Context';
import './quizScreen.css';
import QuestionCard from './questionCard'

function Home() {

    // inside useEffect we use fetch API to call in the questions and save in const questions

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    // useContext is used to confirm if a user is loggedIn
    const user = useContext(UserContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    
    const [score, setScore] = useState(0);    
    
    // receive score hsitory from backend to send both score and percentage increase to backend for rankings

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

	


    function nextQ() { 
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
    }
    function prevQ() {
        if (currentQuestion > 0) {
            const nextQuestion = currentQuestion - 1;
        setCurrentQuestion(nextQuestion);
        }
    }

    function submitQ(score) {
        setShowScore(true);
        setScore(score)

        // score with user id is sent to backEnd to store with new Date()
    }

    // if there is no user logged in this is redirected to myAccount for login or register

    if (!user) return <Redirect to='/myAccount' />

    if (user) {
        return (
        <div className='appContainer'>
                {showScore ? (
                    <div className='app score'>
                    <div className='score-header'>Congratulations !!!</div>
                    <div className='score-message'>
                    You scored {score} out of {questions.length}
                    </div>
                    <div>
                        <Link className='link button1' to='/Quiz'>Retry</Link>
                    </div>
                    </div>

                ) : (
                    <div className='app'>
                        <QuestionCard 
                            currentQuestion={currentQuestion} 
                            questions={questions[currentQuestion]} 
                            prevQ={prevQ} 
                            nextQ={nextQ}
                            submitQ={submitQ}
                            numberOfQ={questions.length} />
                    </div>
                )}
            </div>
        )
    }
	
}

export default Home;
