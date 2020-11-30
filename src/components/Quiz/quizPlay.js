import { Redirect, Link } from 'react-router-dom';
import React, {useState, useContext} from 'react';
import { UserContext } from '../context/user1Context';
import './quizScreen.css';
import Timer from './timer';
import QuestionCard from './questionCard'

function Home() {

    const user = useContext(UserContext);



    const [started, setStarted] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [scoreMessage, setScoreMessage] = useState('Congratulations');
    
    const [answers, setAnswers] = useState([false, false, false, false, false]);
    
    

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
    }

    
    if (!user) return <Redirect to='/signin' />    
    if (user) {
        return (
        
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                    <div>{scoreMessage}</div>
                        You scored {score} out of {questions.length}
                        <Link to='/Quiz'>Retry</Link>
                    </div>
                ) : (
                    <div>
                        <QuestionCard 
                            currentQuestion={currentQuestion} 
                            questions={questions[currentQuestion]} 
                            prevQ={prevQ} 
                            nextQ={nextQ}
                            submitQ={submitQ} />
                        <Timer setShowScore={setShowScore} showScore={showScore} setScoreMessage={setScoreMessage} />
                    </div>
                )}
            </div>
        )
    }
	
}

export default Home;
