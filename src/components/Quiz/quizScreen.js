import { Redirect, Link } from 'react-router-dom';
import React, {useState, useContext} from 'react';
import { UserContext } from '../context/user1Context';
import './quizScreen.css';
import Timer from './timer';
import QuestionCard from './questionCard'

function Home() {

    const user = useContext(UserContext);

    
    if (!user) return <Redirect to='/myAccount' />    

        return (
            <div>

            <button>
            <Link to='/Quiz/play'>START</Link>
            </button>
            
            <button>
            <Link to='/Quiz/ranking'>Ranking</Link>
            </button>

            </div>
        )
    
	
}

export default Home;
