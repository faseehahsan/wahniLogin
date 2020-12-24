import { Redirect, Link } from 'react-router-dom';
import React, {useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user1Context';
import { QuestionContext } from '../context/questionsContext';
import './quizScreen.css';
import QuestionCard from './questionCard'
import Loader from '../../globalComponents/loader'

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

    function nextQ(nextQuestion) { 
        setCurrentQuestion(nextQuestion);

        // const nextQuestion = currentQuestion + 1;
        // if (nextQuestion < questions.length) {
		// }
    }
    function prevQ() {
        if (currentQuestion > 0) {
            const nextQuestion = currentQuestion - 1;
        setCurrentQuestion(nextQuestion);
        }
    }

    function submitQ(score) {
        setScore(score)
        setShowScore(true);

        // score with user id is sent to backEnd to store with new Date()
    }

    // if there is no user logged in this is redirected to myAccount for login or register
    if (!user) return <Redirect to='/myAccount' />

    if (user && !isLoading) {
        return (
        <div className='body'>
                    <div className='questionDiv'>
                        <QuestionCard 
                            currentQuestion={currentQuestion} 
                            questions={questions} 
                            prevQ={prevQ} 
                            nextQ={nextQ}
                            submitQ={submitQ}
                            numberOfQ={questions.length}
                            showScore={showScore} />
                    </div>
            </div>
        )
    } else if (user && isLoading) {
        return (
            <div className='flexCenter body'>
                <Loader borderWidth='5px' width='50px'/>
            </div>
        )
    }
	
}

export default Home;
