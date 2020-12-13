import React, { useState, useContext } from 'react';
// import { UserContext } from '../context/user1Context';
import Profile from '../Profile/profile'
import firebase from '../../firebase'
import { UserContext } from '../context/user1Context';
import { useHistory } from "react-router-dom";




import './app.css'


function Login() {

  
  // confirm if user is available
  const user = useContext(UserContext);

  const [inputName, setInputName] = useState('')
  const [inputNumber2, setInputNumber2] = useState('')

  const history = useHistory();


  // const user = useContext(UserContext);

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        'size': 'normal',
        'callback': function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log('recaptcha solved')
          onSignInSubmit();
        }
      });
  }


  const onSignInSubmit = (number, name) => {

    setUpRecaptcha();
    // var phoneNumber = getPhoneNumberFromUserInput();
    console.log(number)
    var phoneNumber = '+' + number;
    var appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log('get OTP initiated')

        // afterGETotp(confirmationResult)

        window.confirmationResult = confirmationResult;
        // step4
        var code = window.prompt('Enter OTP');
        // var code = getCodeFromUserInput();
        confirmationResult.confirm(code).then(function (result) {
          // User signed in successfully.
          alert('You are successfully signed In')

          var user1 = firebase.auth().currentUser;
          if(user1.displayName !== null || user1.displayName === '') {
            history.push('/Quiz');
          }

          setInputName('')
          setInputNumber2('')
          // ...
        }).catch(function (error) {
          // User couldn't sign in (bad verification code?)
          // ...
          alert(error)
          window.location.reload();
        });
        
      }).catch(function (error) {
        // Error; SMS not sent
        // console.log(error)
        alert(error)
        window.location.reload();
      });
  }

  function CompleteProfile(nameInput) {
    firebase.auth().currentUser.updateProfile({displayName: nameInput}).then(function() {
      history.push('/Quiz');
     window.location.reload();
    });
     
  }
  

  

  function logout() {
    firebase.auth().signOut();
    console.log('loggedout')
  };

  // function profilePicUpdate(file) {
  //   firebase.storage.ref('users/' + user.uid + '.jpg').put(file)
  // }




  // if user is logged in we show profile else we show register or login page

  if (!user.loggedIn) {
    return (
      <div className='body'>
        <img src="https://image.flaticon.com/icons/png/512/2922/2922532.png" alt="" />
        <p className='descriptionText'></p>
        


        <div className='login-container loginresponsive'>
          <form className='form' onSubmit={(e) => e.preventDefault()}>
            <div className='header'>L O G I N</div>
            <div className='input-container'>
              <p>
              <p className='inputDescription'>Mobile Number</p>
              <input value={inputNumber2} onChange={e => setInputNumber2(e.target.value)} type="number" placeholder="Country code + Number (e.g. 918456154658)" name="mobile" />
              </p>
              <p className='button1' type='button' onClick={() => onSignInSubmit(inputNumber2)}>SIGN IN</p>
            </div>
            <div id="recaptcha-container"></div>


          </form>
        </div>
      
      </div>

    );
  } else {
    return (
      <div>
        <Profile completeProfile={CompleteProfile} user={user} logout={logout} />
      </div>
    )
  }



}

export default Login;
