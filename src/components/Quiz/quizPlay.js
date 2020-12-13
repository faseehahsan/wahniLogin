import { Redirect, Link } from 'react-router-dom';
import React, {useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user1Context';
import { QuestionContext } from '../context/questionsContext';
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
    const [qs, setqs] = useContext(QuestionContext);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    // where 3 is the questions length
    const randomNumber = Math.floor(Math.random()*qs.length);
    
    const [score, setScore] = useState(0); 
    const [questions, setQuestions] = useState(''); 

    
    
    useEffect(() => {
        const shuffled = qs.sort(() => 0.5 - Math.random());
// Get sub-array of first n elements after shuffled
        let selected = shuffled.slice(0, 5);
        setQuestions(selected)
        setIsLoading(false);
    }, [])
    // receive score hsitory from backend to send both score and percentage increase to backend for rankings


	


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

    if (user && !isLoading) {
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
    } else if (user && isLoading) {
        return (
            <div>
                <h1>Loading.........</h1>
            </div>
        )
    }
	
}

export default Home;
