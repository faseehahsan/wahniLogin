import { Redirect, Link } from 'react-router-dom';
import React, {useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user1Context';
import { QuestionContext } from '../context/questionsContext';
import './quizScreen.css';
import QuestionCard from './questionCard'

function Home() {

    // useContext is used to confirm if a user is loggedIn
    const user = useContext(UserContext);
    // questions received from questionContext
    const [qs, setqs] = useContext(QuestionContext);
    // shuffled questions
    const [questions, setQuestions] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // on component load, from the qs, array the questions are shuffled and randomized
        setIsLoading(true);
        // Get sub-array of first n elements after shuffled
        const shuffled = qs.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 5);
        setQuestions(selected);
        setIsLoading(false);
    }, [])

    // question Index to be shown to the user
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // calculate scores=
    const [score, setScore] = useState(0); 
    // when timeOut or onSubmit the score is shown (showscore set to true)
    const [showScore, setShowScore] = useState(false);
    
    // fetch score hsitory of user from backend to send both score and percentage increase to backend for rankings

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
