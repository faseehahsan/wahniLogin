import React, { useState, useContext, useEffect } from "react";
import Profile from "../Profile/profile";
import firebase from "../../firebase";
import { UserContext } from "../context/user1Context";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./myAccount.css";

function Login() {
  // on Component load fetch the country code based on the ip address and set input field
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        console.log(`countryName: ${data.country_calling_code}`);
        const countryCode = data.country_calling_code.substring(1);
        setInputNumber(`${countryCode}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // confirm if user is available
  const user = useContext(UserContext);
  //  input for mobile number
  const [inputNumber, setInputNumber] = useState("");
  // useHistory hook to redirect to '/Quiz' on login if registration is complete
  const history = useHistory();

  //Registration, Verifying Captcha and OTP validation START
  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      }
    );
  };

  const onSignInSubmit = (number, name) => {
    setUpRecaptcha();
    // var phoneNumber = getPhoneNumberFromUserInput();
    console.log(number);
    var phoneNumber = "+" + number;
    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("get OTP initiated");

        // afterGETotp(confirmationResult)

        window.confirmationResult = confirmationResult;
        // step4
        var code = window.prompt("Password has been sent to your device");
        // var code = getCodeFromUserInput();
        confirmationResult
          .confirm(code)
          .then(function (result) {
            // User signed in successfully.

            var user1 = firebase.auth().currentUser;
            if (user1.displayName !== null || user1.displayName === "") {
              history.push("/Quiz");
            }

            setInputNumber("");
            // ...
          })
          .catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
            alert(error);
            window.location.reload();
          });
      })
      .catch(function (error) {
        // Error; SMS not sent
        // console.log(error)
        alert(error);
        window.location.reload();
      });
  };
  //Registration, Verifying Captcha and OTP validation END

  function CompleteProfile(nameInput) {
      //on submitting FORM in complete registration form in <Profile />
    firebase
      .auth()
      .currentUser.updateProfile({ displayName: nameInput })
      .then(function () {
        history.push("/Quiz");
        window.location.reload();
      });
  }

  function logout() {
  //on log out click inside <Profile />
    firebase.auth().signOut();
    console.log("loggedout");
  }

  // if user is logged in we show PROFILE else we show LOGIN

  if (!user.loggedIn) {
    return (
      <div className="body">
        <img
          className="smallImageContainer"
          src="https://image.flaticon.com/icons/png/512/2922/2922532.png"
          alt=""
        />

        <div className="login-container card1 responsiveWidth loginContainerSize">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="header">L O G I N</div>
            <div className="input-container">
              <p className="inputDescription">Mobile Number</p>
              <input
                className="inputStyle"
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value)}
                type="number"
                placeholder="Country code + Number (e.g. 918456154658)"
                name="mobile"
              />
            </div>

            <div
              className="button1"
              type="button"
              onClick={() => onSignInSubmit(inputNumber)}
            >
              SIGN IN
            </div>

            <div id="recaptcha-container"></div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <Profile completeProfile={CompleteProfile} user={user} logout={logout} />
    );
  }
}

export default Login;
