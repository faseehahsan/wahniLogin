import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import './quizScreen.css';
import { UserContext } from '../context/user1Context';


function Home() {

    const user = useContext(UserContext);

    // 3 icons' linking to play, rankings and admin dashboard to add questions only for admin

        return (
            <div className='appContainer'>
            <div className='quizScreenContainer'>
            
            <Link className='quizNavContainer link' to='/Quiz/play'>
            <img src="https://image.flaticon.com/icons/png/512/27/27223.png" alt="" />
            <div className='quizScreenText'>PLAY</div>
            </Link>

            {user.id === 'zOOj1gwSb7WQA7dwMBgW2EYJOk52' ? 
                <Link className='quizNavContainer link' to='/Quiz/add'>
                <img src="https://image.flaticon.com/icons/png/512/57/57108.png" alt="" />
                <div className='quizScreenText'>QUESTIONS</div>
                </Link> : <div></div>
            }

            <Link className='quizNavContainer link' to='/Quiz/ranking'>
            <img src="https://image.flaticon.com/icons/png/512/13/13815.png" alt="" />
            <div className='quizScreenText'>RANKINGS</div>
            </Link>

            
            </div>
            </div>
        )
    
	
}

export default Home;
