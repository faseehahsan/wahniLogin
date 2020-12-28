import React, { useState, useEffect } from "react";
import "./rankingScreen.css";
import "../Registration/myAccount.css";
import firebase from "../../firebase";
import Loader from "../../globalComponents/loader";

function RankingScreen() {
    //Logic Calculation to get Ranking of each types
  const [topScores1, setTopScores1] = useState([]);
  const [mostAttempts1, setMostAttempts1] = useState([]);
  const [highestPercentage1, setHighestPercentage1] = useState([]);
  // set loadings
  const [topScoresLoading, setTopScoresLoading] = useState(true);
  const [mostAttemptsLoading, setMostAttemptsLoading] = useState(true);
  const [highestPercentageLoading, setHighestPercentageLoading] = useState(false);

//   useEffect(() => {
    
//   }, []);

  // on useEffect fetch user scores from the backEnd

  const rankings = [
    {
      userid: "11111",
      username: "AAAAA",
      scores: [
        {
          submittedAt: 1,
          score: "5",
          percentageIncrease: "25",
        },
        {
          submittedAt: 2,
          score: "10",
          percentageIncrease: "50",
        },
      ],
    },
    {
      userid: "22222",
      username: "BBBBB",
      scores: [
        {
          submittedAt: 1,
          score: "45",
          percentageIncrease: "56",
        },
        {
          submittedAt: 2,
          score: "5",
          percentageIncrease: "45",
        },
      ],
    },
    {
      userid: "33333",
      username: "CCCCC",
      scores: [
        {
          submittedAt: 1,
          score: "23",
          percentageIncrease: "45",
        },
        {
          submittedAt: 2,
          score: "56",
          percentageIncrease: "13",
        },
      ],
    },
    {
      userid: "44444",
      username: "DDDDD",
      scores: [
        {
          submittedAt: 1,
          score: "55",
          percentageIncrease: "12",
        },
        {
          submittedAt: 2,
          score: "8",
          percentageIncrease: "16",
        },
      ],
    },
    {
      userid: "55555",
      username: "EEEEE",
      scores: [
        {
          submittedAt: 1,
          score: "63",
          percentageIncrease: "32",
        },
        {
          submittedAt: 2,
          score: "80",
          percentageIncrease: "60",
        },
      ],
    },
  ];

  //all these contribute to UI for the animation effect
  //START
  const [mostAttemptsClicked, setmostAttemptsClicked] = useState(false);
  const [topScorersClicked, settopScorersClicked] = useState(false);
  const [topPerformersCLicked, settopPerformersCLicked] = useState(false);

  const loginContainer1 = topScorersClicked
    ? "rankCard rankCardHeight400 wahniBgColor"
    : "rankCard rankCardHeight60";
  const headerContainer1 = topScorersClicked
    ? "rankHeaderDiv"
    : "rankHeaderDiv rankHeaderDivClick wahniColor";
  const rankTable1 = topScorersClicked ? "rankTable" : "hide-section1";

  const loginContainer2 = mostAttemptsClicked
    ? "rankCard rankCardHeight400 wahniBgColor"
    : "rankCard rankCardHeight60";
  const headerContainer2 = mostAttemptsClicked
    ? "rankHeaderDiv"
    : "rankHeaderDiv rankHeaderDivClick wahniColor";
  const rankTable2 = mostAttemptsClicked
    ? "rankTable"
    : "rankTable hide-section1";

  const loginContainer3 = topPerformersCLicked
    ? "rankCard rankCardHeight400 wahniBgColor"
    : "rankCard rankCardHeight60";
  const headerContainer3 = topPerformersCLicked
    ? "rankHeaderDiv"
    : "rankHeaderDiv rankHeaderDivClick wahniColor";
  const rankTable3 = topPerformersCLicked
    ? "rankTable"
    : "rankTable hide-section1";

  //Logic Calculation to get Ranking of each types
  const [mostAttempts, setMostAttempts] = useState([]);
  const [highestPercentage, setHighestPercentage] = useState([]);

  function topScore() {
    if(topScores1.length < 1) {
        setTopScoresLoading(true)
    firebase
      .firestore()
      .collection("rankings")
      .orderBy("score", "desc")
      .limit(5)
      .onSnapshot(
        (docData) => {
          const list = [];
          docData.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          });
          console.log(list);
          setTopScoresLoading(false);
          setTopScores1(list)
        },
        (err) => {
          window.alert("Unable to get rankings", err);
        }
      );
    } else {
        setTopScoresLoading(false)
    }
    
}

  function mostAttempt() {
    if(mostAttempts1.length < 1) {
        setMostAttemptsLoading(true)
    firebase
      .firestore()
      .collection("rankings")
      .orderBy("attempt", "desc")
      .limit(5)
      .onSnapshot(
        (docData) => {
          const list = [];
          docData.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          });
          console.log(list);
          setMostAttemptsLoading(false);
          setMostAttempts1(list)
        },
        (err) => {
          window.alert("Unable to get rankings", err);
        }
      );
    } else {
        setMostAttemptsLoading(false)
    }
  }

  function percentageHighest() {
    if(highestPercentage1.length < 1) {
        setHighestPercentageLoading(true)
    firebase
      .firestore()
      .collection("rankings")
      .orderBy("perecentageIncrease", "desc")
      .limit(5)
      .onSnapshot(
        (docData) => {
          const list = [];
          docData.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id });
          });
          console.log(list);
          setHighestPercentageLoading(false);
          setHighestPercentage1(list)
        },
        (err) => {
          window.alert("Unable to get rankings", err);
        }
      );
    } else {
        setHighestPercentageLoading(false)
    }
  }

  //Click Handlers of each ranking Components
  function handleTopScoreClick(e) {
    settopScorersClicked(true);
    setmostAttemptsClicked(false);
    settopPerformersCLicked(false);
    topScore();
  }
  function handleMostAttemptClick(e) {
    settopScorersClicked(false);
    settopPerformersCLicked(false);
    setmostAttemptsClicked(true);
    mostAttempt();
  }
  function handleTopPerformerClick(e) {
    settopScorersClicked(false);
    settopPerformersCLicked(true);
    setmostAttemptsClicked(false);
    percentageHighest();
  }

  // if user is logged in we show profile else we show register or login page

  return (
    <div className="body fontMontserrat">
      <div className={loginContainer1}>
        {/* <div className='form'> */}
        <div className={headerContainer1} onClick={handleTopScoreClick}>
          <p>
            Top <b>Scores</b>
          </p>
        </div>
            
            {topScoresLoading ? 
            <div className={rankTable1}>
            <div className='flexCenter'>
            <Loader borderWidth='5px' width='20px' />
            </div>
            </div>
            :
            <div className={rankTable1}>
            {topScores1.map((data, index) => {
                return (
                  <div className="singleRankRow">
                    <div className="nameText rankTextStyle">{data.username}</div>
                    <div className="scoreText rankTextStyle">{data.score}</div>
                  </div>
                );
              })}    
            </div>
            }
          
        </div>
      <div className={loginContainer2}>
        {/* <div className='form'> */}
        <div className={headerContainer2} onClick={handleMostAttemptClick}>
          <p>
            Most <b>Attempts</b>
          </p>
        </div>
        {
            mostAttemptsLoading ? 
            <div className={rankTable2}>
            <div className='flexCenter'>
            <Loader borderWidth='5px' width='20px' />
            </div>
            </div>

            :

            <div className={rankTable2}>
            {mostAttempts1.map((data, index) => {
                return (
                  <div className="singleRankRow">
                    <div className="nameText rankTextStyle">{data.username}</div>
                    <div className="scoreText rankTextStyle">{data.attempt}</div>
                  </div>
                );
              })}    
            </div>
        }
        {/* </div> */}
      </div>

      <div className={loginContainer3}>
        {/* <div className='form'> */}
        <div className={headerContainer3} onClick={handleTopPerformerClick}>
          <p>
            Top <b>Performers</b>
          </p>
        </div>
        {
            highestPercentageLoading ? 
            <div className={rankTable3}>
            <div className='flexCenter'>
            <Loader borderWidth='5px' width='20px' />
            </div>
            </div>

            :

            <div className={rankTable3}>
            {highestPercentage1.map((data, index) => {
                return (
                  <div className="singleRankRow">
                    <div className="nameText rankTextStyle">{data.username}</div>
                    <div className="scoreText rankTextStyle">{data.perecentageIncrease}</div>
                  </div>
                );
              })}    
            </div>
        }
        {/* </div> */}
      </div>
    </div>
  );
}

export default RankingScreen;
