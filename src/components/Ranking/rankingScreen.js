import React, { useState } from 'react'
import './rankingScreen.css'
import '../Registration/myAccount.css'

function RankingScreen() {

    // on useEffect fetch user scores from the backEnd

    const rankings = [
        {
            userid: '11111',
            username: 'AAAAA',
            scores: [
                {
                    submittedAt: 1,
                    score: '5',
                    percentageIncrease: '25'

                },
                {
                    submittedAt: 2,
                    score: '10',
                    percentageIncrease: '50'

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
                    percentageIncrease: '56'

                },
                {
                    submittedAt: 2,
                    score: '5',
                    percentageIncrease: '45'

                },
            ]
        },
        {
            userid: '33333',
            username: 'CCCCC',
            scores: [
                {
                    submittedAt: 1,
                    score: '23',
                    percentageIncrease: '45'

                },
                {
                    submittedAt: 2,
                    score: '56',
                    percentageIncrease: '13'

                },
            ]
        },
        {
            userid: '44444',
            username: 'DDDDD',
            scores: [
                {
                    submittedAt: 1,
                    score: '55',
                    percentageIncrease: '12'
                },
                {
                    submittedAt: 2,
                    score: '8',
                    percentageIncrease: '16'

                },
            ]
        },
        {
            userid: '55555',
            username: 'EEEEE',
            scores: [
                {
                    submittedAt: 1,
                    score: '63',
                    percentageIncrease: '32'
                },
                {
                    submittedAt: 2,
                    score: '80',
                    percentageIncrease: '60'
                },
            ]
        },

    ]
   
    //all these contribute to UI for the animation effect
    //START
    const [mostAttemptsClicked, setmostAttemptsClicked] = useState(false);
    const [topScorersClicked, settopScorersClicked] = useState(false);
    const [topPerformersCLicked, settopPerformersCLicked] = useState(false);
  
    const loginContainer1 = topScorersClicked ? 'rankCard rankCardHeight400': 'rankCard rankCardHeight60';
    const headerContainer1 = topScorersClicked ? 'rankHeaderDiv': 'rankHeaderDiv rankHeaderDivClick';
    const rankTable1 = topScorersClicked ? 'rankTable' : 'hide-section1';
  
    const loginContainer2 = mostAttemptsClicked ? 'rankCard rankCardHeight400': 'rankCard rankCardHeight60';
    const headerContainer2 = mostAttemptsClicked ? 'rankHeaderDiv': 'rankHeaderDiv rankHeaderDivClick';
    const rankTable2 = mostAttemptsClicked ? 'rankTable' : 'rankTable hide-section1';

    const loginContainer3 = topPerformersCLicked ? 'rankCard rankCardHeight400': 'rankCard rankCardHeight60';
    const headerContainer3 = topPerformersCLicked ? 'rankHeaderDiv': 'rankHeaderDiv rankHeaderDivClick';
    const rankTable3 = topPerformersCLicked ? 'rankTable' : 'rankTable hide-section1';

    //Logic Calculation to get Ranking of each types
    const [topScores, setTopScores] = useState([]);
    const [mostAttempts, setMostAttempts] = useState([]);
    const [highestPercentage, setHighestPercentage] = useState([]);

    function topScore() {
        const newArray = [];
        rankings.map(data => {
            data.scores.map(data1 => {
                newArray.push(
                    {
                        name: data.username,
                        score: data1.score
                    }
                )
            })
        })
        setTopScores(newArray.sort((a,b) => (parseInt(b.score) > parseInt(a.score)) ? 1 : -1))
    }

    function mostAttempt() {
        const newArray = [];
        rankings.map(data => newArray.push({
            name: data.username,
            attempts: data.scores.length
        }))
        setMostAttempts(newArray.sort((a,b) => (parseInt(b.attempts) > parseInt(a.attempts)) ? 1 : -1))
    }

    function percentageHighest() {
        const newArray = [];
        rankings.map(data => {
            data.scores.map(data1 => {
                newArray.push(
                    {
                        name: data.username,
                        percentage: data1.percentageIncrease
                    }
                )
            })
        })
        setHighestPercentage(newArray.sort((a,b) => (parseInt(b.percentage) > parseInt(a.percentage)) ? 1 : -1))
    }

    //Click Handlers of each ranking Components
    function handleTopScoreClick(e) {
        settopScorersClicked(true)
        setmostAttemptsClicked(false)
        settopPerformersCLicked(false)
        topScore()
      }
      function handleMostAttemptClick(e) {
        settopScorersClicked(false)
        settopPerformersCLicked(false)
        setmostAttemptsClicked(true)
        mostAttempt()
      }
      function handleTopPerformerClick(e) {
        settopScorersClicked(false)
        settopPerformersCLicked(true)
        setmostAttemptsClicked(false)
        percentageHighest()
      }

    
  
    // if user is logged in we show profile else we show register or login page
  
    
      return (
        <div className='body fontMontserrat'>
          <div className={loginContainer1}>
            {/* <div className='form'> */}
            <div className={headerContainer1} onClick={handleTopScoreClick}>
                <p className='wahniColor'>Top <b>Scores</b></p>
                </div>
              <div className={rankTable1}>
              <div className='singleRankRow'>
                  <div className='rankText rankTextStyle'>Rank</div>
                  <div className='nameText rankTextStyle'>Name</div>
                  <div className='scoreText rankTextStyle'>Score</div>
                  </div>
              
                  {
                      topScores.slice(0,5).map((data, index) => {
                          return (
                <div className='singleRankRow'>
                  <div className='rankText rankTextStyle'>{index + 1}</div>
                  <div className='nameText rankTextStyle'>{data.name}</div>
                  <div className='scoreText rankTextStyle'>{data.score}</div>
                  
                  </div>
                          )
                      })
                  }
              {/* </div> */}
            </div>


          </div>
          <div className={loginContainer2}>
            {/* <div className='form'> */}
            <div className={headerContainer2} onClick={handleMostAttemptClick}>
            <p className='wahniColor'>Most <b>Attempts</b></p>
                </div>
              <div className={rankTable2}>
              <div className='singleRankRow'>
                  <div className='rankText rankTextStyle'>Rank</div>
                  <div className='nameText rankTextStyle'>Name</div>
                  <div className='scoreText rankTextStyle'>Attempts</div>
                  </div>
                  {
                      mostAttempts.slice(0,5).map((data, index) => {
                          return (
                <div className='singleRankRow'>
                  <div className='rankText rankTextStyle'>{index + 1}</div>
                  <div className='nameText rankTextStyle'>{data.name}</div>
                  <div className='scoreText rankTextStyle'>{data.attempts}</div>
                  
                  </div>
                          )
                      })
                  }
              </div>
            {/* </div> */}
          </div>

          <div className={loginContainer3}>
            {/* <div className='form'> */}
            <div className={headerContainer3} onClick={handleTopPerformerClick}>
            <p className='wahniColor'>Top <b>Performers</b></p>

                </div>
              <div className={rankTable3}>
              <div className='singleRankRow'>
                  <div className='rankText rankTextStyle'>Rank</div>
                  <div className='nameText rankTextStyle'>Name</div>
                  <div className='scoreText rankTextStyle'>Improvement</div>
                  </div>
                  {
                      highestPercentage.slice(0,5).map((data, index) => {
                          return (
                <div className='singleRankRow'>
                  <div className='rankText rankTextStyle'>{index + 1}</div>
                  <div className='nameText rankTextStyle'>{data.name}</div>
                  <div className='scoreText rankTextStyle'>{data.percentage}</div>
                  
                  </div>
                          )
                      })
                  }
              </div>
            {/* </div> */}
          </div>
    
          
        </div>
    
      );
}


export default RankingScreen