import React, { useState, useContext, useEffect } from "react";
import Profile from "../Profile/profile";
import firebase from "../../firebase";
import { UserContext } from "../context/user1Context";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loader from '../../globalComponents/loader'

import "./myAccount.css";

function Login() {

  const [isloading, setIsLoading] = useState(false)
  // on Component load fetch the country code based on the ip address and set input field
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        const countryCode = data.country_calling_code.substring(1);
        setInputNumber(`${countryCode}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // confirm if user is available
  // user details and scores
  const userContextObject = useContext(UserContext);
  const user = userContextObject.user;
  const userLoading = userContextObject.userLoading;
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
          setIsLoading(false)
          onSignInSubmit();
        },
      }
    );
       
  };

  const onSignInSubmit = (number, name) => {
    setIsLoading(true)
    setUpRecaptcha();
    // var phoneNumber = getPhoneNumberFromUserInput();
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
  }

  // if user is logged in we show PROFILE else we show LOGIN

  if (user && user.loggedIn) {
    return (
      <Profile completeProfile={CompleteProfile} user={user} logout={logout} />
    );
  }
  else if (userLoading) {
    return (
      <div className='body flexCenter'>
        <Loader width='50px' borderWidth='5px' />
      </div>
    )
  }
  else {
    
    return (
      <div className="body">
       

        <div className="cardOne flexCenter cardOneAdd fontMontserrat">
          <div className='blank100'></div>
          <div className='loginSection'>
          <p className="headerLogin fontMontserrat">L O G I N</p>
            <div className="numberInputContainer">
              <p>enter <b>mobile number</b></p>
              <input
                className="numberInput fontMontserrat"
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value)}
                type="number"
                placeholder='e.g. 919564458759'
                name="mobile"
                required={true}
              />
            </div>



            {!isloading ? 
              <div
              className="signInButton wahniBgColor flexCenter"
              type="button"
              onClick={() => onSignInSubmit(inputNumber)}
            >
              SIGN IN
            </div>
            : 
            <div
              className="signInButton wahniBgColor flexCenter"
              type="button"
              onClick={() => { if (window.confirm('Verification in progress. Are you sure you want to cancel ?')) window.location.reload();} }
              >
              <Loader width='15px' borderWidth='3px' />
            </div>
            }
            

          </div>
          <div className='flexCenter' id="recaptcha-container"></div>

  
            

        </div>
      </div>
    );
  }
}

export default Login;
