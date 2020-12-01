import { Link } from 'react-router-dom';
import React from 'react';
import './quizScreen.css';

function Home() {
    

        return (
            <div className='appContainer'>
            <div className='quizScreenContainer'>
            
            
            <Link className='quizNavContainer link' to='/Quiz/play'>
            <img src="https://image.flaticon.com/icons/png/512/27/27223.png" alt="" />
            <div className='quizScreenText'>PLAY</div>
            </Link>

            <Link className='quizNavContainer link' to='/Quiz/ranking'>
            <img src="https://image.flaticon.com/icons/png/512/13/13815.png" alt="" />
            <div className='quizScreenText'>RANKINGS</div>
            </Link>

            
            </div>
            </div>
        )
    
	
}

export default Home;
