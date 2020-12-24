import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./context/user1Context";
import Loader from "../globalComponents/loader";
import axios from "axios";

function Home() {
  const user = useContext(UserContext);

  const apiKey = "ece76e4a5a7f59a";
  const apiSecret = "099595a2f12ff22";

  const baseUrl = "https://reachkerala.in";
  const cors = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    fetch(`${cors}${baseUrl}/api/method/frappe.auth.get_logged_user`, {
      headers: {
        Authorization: `token ${apiKey}:${apiSecret}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
      })
      .catch((err) => console.log(err));
  }, []);

  function clickHandler() {
    fetch(`${cors}${baseUrl}/api/resource/ToDo`, {
        headers: {
          Authorization: `token ${apiKey}:${apiSecret}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((r) => r.json())
        .then((r) => {
          console.log(r);
        })
        .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>WahniHome</h1>
      <Loader width="20px" borderWidth="5px" />
      <button onClick={() => clickHandler()}>fetch</button>
    </div>
  );
}

export default Home;
