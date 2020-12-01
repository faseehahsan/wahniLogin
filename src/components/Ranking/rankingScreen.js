import React, { useState } from 'react'
import './rankingScreen.css'
import '../Registration/app.css'

function RankingScreen() {

    const rankings = [
        {
            userid: '11111',
            username: 'AAAAA',
            scores: [
                {
                    submittedAt: 1,
                    score: '5',
                },
                {
                    submittedAt: 2,
                    score: '10',
                }
            ]
        },
        {
            userid: '22222',
            username: 'BBBBB',
            scores: [
                {
                    submittedAt: 1,
                    score: '45',
                },
                {
                    submittedAt: 2,
                    score: '5',
                },
            ]
        },
        {
            userid: '',
            username: '',
            scores: [
                {
                    submittedAt: 1,
                    score: '23',
                },
                {
                    submittedAt: 2,
                    score: '56',
                },
            ]
        },
        {
            userid: '',
            username: '',
            scores: [
                {
                    submittedAt: 1,
                    score: '55',
                },
                {
                    submittedAt: 2,
                    score: '8',
                },
            ]
        },
        {
            userid: '',
            username: '',
            scores: [
                {
                    submittedAt: 1,
                    score: '63',
                },
                {
                    submittedAt: 2,
                    score: '80',
                },
            ]
        },

    ]
   
    const [loginClicked, setLoginClicked] = useState(false);
    const [registerClicked, setRegisterClicked] = useState(false);
    const [logoutClicked, setLogoutClicked] = useState(false);
  
    const loginContainer1 = registerClicked ? 'login-container loginresponsive': 'login-container loginresponsive hide-login';
    const headerContainer1 = registerClicked ? 'header': 'header headerHover';
    const rankTable1 = registerClicked ? 'rankTable' : 'rankTable hide-section';
  
    const loginContainer2 = loginClicked ? 'login-container loginresponsive': 'login-container loginresponsive hide-login';
    const headerContainer2 = loginClicked ? 'header': 'header headerHover';
    const rankTable2 = loginClicked ? 'rankTable' : 'rankTable hide-section';

    const loginContainer3 = logoutClicked ? 'login-container loginresponsive': 'login-container loginresponsive hide-login';
    const headerContainer3 = logoutClicked ? 'header': 'header headerHover';
    const rankTable3 = logoutClicked ? 'rankTable' : 'rankTable hide-section';
    
  
    function handleRegisterClick(e) {
      setRegisterClicked(true)
      setLoginClicked(false)
      setLogoutClicked(false)

    }
    function handleLoginClick(e) {
      setRegisterClicked(false)
      setLogoutClicked(false)

      setLoginClicked(true)
    }
    function handleLogoutClick(e) {
      setRegisterClicked(false)
      setLogoutClicked(true)
      setLoginClicked(false)
    }
  
    // if user is logged in we show profile else we show register or login page
  
    
      return (
        <div className='body'>
          <div className={loginContainer1}>
            <div className='form'>
            <div className={headerContainer1} onClick={handleRegisterClick}>TOP SCORES</div>
              <div className={rankTable1}>
              <div className='singleInputContainer headContainer'>
                  <div className='rankText text'>Rank</div>
                  <div className='nameText text'>Name</div>
                  <div className='scoreText text'>Score</div>
                  </div>
              <div className='singleInputContainer'>
                  <div className='rankText text'>1</div>
                  <div className='nameText text'>Ahsan</div>
                  <div className='scoreText text'>12</div>
                  </div>
              </div>
            </div>


          </div>
          <div className={loginContainer2}>
            <div className='form'>
            <div className={headerContainer2} onClick={handleLoginClick}>MOST ATTEMPTS</div>
              <div className={rankTable2}>
              <div className='singleInputContainer headContainer'>
                  <div className='rankText text'>Rank</div>
                  <div className='nameText text'>Name</div>
                  <div className='scoreText text'>Score</div>
                  </div>
              <div className='singleInputContainer'>
                  <div className='rankText text'>1</div>
                  <div className='nameText text'>Ahsan</div>
                  <div className='scoreText text'>12</div>
                  </div>
              </div>
            </div>
          </div>

          <div className={loginContainer3}>
            <div className='form'>
            <div className={headerContainer3} onClick={handleLogoutClick}>TOP PERFORMERS</div>
              <div className={rankTable3}>
              <div className='singleInputContainer headContainer'>
                  <div className='rankText text'>Rank</div>
                  <div className='nameText text'>Name</div>
                  <div className='scoreText text'>Score</div>
                  </div>
              <div className='singleInputContainer'>
                  <div className='rankText text'>1</div>
                  <div className='nameText text'>Ahsan</div>
                  <div className='scoreText text'>12</div>
                  </div>
              </div>
            </div>
          </div>
    
          
        </div>
    
      );
}


export default RankingScreen