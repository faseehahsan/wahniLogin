import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./quizScreen.css";
import { UserContext } from "../context/user1Context";

function Home() {
  const user = useContext(UserContext);

  // 3 icons' linking to play, rankings and admin dashboard to add questions only for admin

  return (
    <div className="body">
      <div className="flex1 quizScreenContainer fontMontserrat">
        <div className="linksContainer">
          <Link className="singleLinkContainer link link1" to="/Quiz/play">
            <div>
              <p style={{ fontSize: 18, letterSpacing: "0.05em" }}>Take the</p>
              <p style={{ fontSize: 24, fontWeight: "bold" }}>Quiz</p>
            </div>
            <img
              src="https://www.iconsdb.com/icons/preview/white/play-xxl.png"
              alt=""
            />
          </Link>

          {user.id === "zOOj1gwSb7WQA7dwMBgW2EYJOk52" ? (
            <Link className="singleLinkContainer link link1" to="/Quiz/add">
              <div>
                
                <p style={{ fontSize: 24, fontWeight: "bold" }}>Admin</p>
              </div>
              <img
                src="https://www.iconsdb.com/icons/preview/white/administrator-xxl.png"
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
