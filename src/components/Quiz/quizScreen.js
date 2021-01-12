import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./quizScreen.css";
import { UserContext } from "../context/user1Context";

import playIcon from '../../assets/play-white-icon.png'
import adminIcon from '../../assets/admin-white-icon.png'

function Home() {
  // user details and scores
  const userContextObject = useContext(UserContext);
  const user = userContextObject.user;
  // 3 icons' linking to play, rankings and admin dashboard to add questions only for admin

  function alertIfnotLoggedIn() {
    if (!user || !user.loggedIn) {
      window.alert('Log in to attend the Quiz')
    } else if (user && (user.name === null || user.name === undefined || user.name === '')) {
      window.alert('Edit your Name before playing')
    }
  }

  return (
    <div className="body">
      <div className="flex1 quizScreenContainer fontMontserrat">
        <div className="linksContainer">
          <Link onClick={() => alertIfnotLoggedIn()} className="singleLinkContainer link link1" to="/Quiz/play">
            <div>
              <p style={{ fontSize: 18, letterSpacing: "0.05em" }}>Take the</p>
              <p style={{ fontSize: 24, fontWeight: "bold" }}>Quiz</p>
            </div>
            <img
              src={playIcon}
              alt=""
            />
          </Link>

          {user && user.id === "GmGq1t1xkobQLpfQEjv7QQogH022" ? (
            <Link className="singleLinkContainer link link1" to="/Quiz/add">
              <div>
                <p style={{ fontSize: 24, fontWeight: "bold" }}>Admin</p>
              </div>
              <img
                src={adminIcon}
                alt=""
              />{" "}
            </Link>
          ) : null}

          <Link
            className="singleLinkContainer link link2 wahniColor"
            to="/Quiz/ranking"
          >
            <p style={{ paddingLeft: "25px", fontWeight: "bold" }}>Leader</p>
            <p>board</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
