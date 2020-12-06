import React, { useState, useContext } from 'react';
// import { UserContext } from '../context/user1Context';
import Profile from '../Profile/profile'
import firebase from '../../firebase'
import { UserContext } from '../context/user1Context';



import './app.css'


function Login() {

  const [inputName, setInputName] = useState('')
  const [inputNumber1, setInputNumber1] = useState('')
  const [inputNumber2, setInputNumber2] = useState('')

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

          if(name) {
            firebase.auth().currentUser.updateProfile({ displayName: name })
          } else {
            console.log('not updated')
          }

          setInputName('')
          setInputNumber1('')
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

  

  

  function logout() {
    firebase.auth().signOut();
    console.log('loggedout')
  };

  // function profilePicUpdate(file) {
  //   firebase.storage.ref('users/' + user.uid + '.jpg').put(file)
  // }

  // confirm if user is available
  const user = useContext(UserContext);



  const [loginClicked, setLoginClicked] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);

  const loginContainer1 = registerClicked ? 'login-container loginresponsive' : 'login-container loginresponsive hide-login';
  const headerContainer1 = registerClicked ? 'header' : 'header headerHover';
  const inputContainer1 = registerClicked ? 'input-container' : 'input-container hide-section';

  const loginContainer2 = loginClicked ? 'login-container loginresponsive' : 'login-container loginresponsive hide-login';
  const headerContainer2 = loginClicked ? 'header' : 'header headerHover';
  const inputContainer2 = loginClicked ? 'input-container' : 'input-container hide-section';


  function handleRegisterClick(e) {
    setRegisterClicked(true)
    setLoginClicked(false)
  }
  function handleLoginClick(e) {
    setRegisterClicked(false)
    setLoginClicked(true)
  }

  // if user is logged in we show profile else we show register or login page

  if (!user.loggedIn) {
    return (
      <div className='body'>
        <img src="https://image.flaticon.com/icons/png/512/2922/2922532.png" alt="" />
        <p className='descriptionText'></p>
        <div className={loginContainer1}>
          <form className='form' onSubmit={(e) => e.preventDefault()}>
            <div className={headerContainer1} onClick={handleRegisterClick}>R E G I S T E R</div>
            <div className={inputContainer1}>
            
              <p>
              <p className='inputDescription'>Name</p>
              <input type="text" value={inputName} onChange={e => setInputName(e.target.value)} placeholder="Your name (e.g. John)" name="name" />
              </p>

              <p>
              <p className='inputDescription'>Number</p>
              <input type="number" value={inputNumber1} onChange={e => setInputNumber1(e.target.value)} placeholder="Country code + Number (e.g. 918456154658)" name="mobile" />
              </p>
              <p onClick={() => onSignInSubmit(inputNumber1, inputName)} className='button1'>SIGN UP</p>
            </div>
          </form>
        </div>

        <div id="recaptcha-container"></div>

        <div className={loginContainer2}>
          <form className='form' onSubmit={(e) => e.preventDefault()}>
            <div className={headerContainer2} onClick={handleLoginClick}>L O G I N</div>
            <div className={inputContainer2}>
              <p>
              <p className='inputDescription'>Mobile Number</p>
              <input value={inputNumber2} onChange={e => setInputNumber2(e.target.value)} type="number" placeholder="Country code + Number (e.g. 918456154658)" name="mobile" />
              </p>
              <p className='button1' type='button' onClick={() => onSignInSubmit(inputNumber2)}>SIGN IN</p>
             


            </div>

          </form>
        </div>
      
      </div>

    );
  } else {
    return (
      <div>
        <Profile user={user} logout={logout} />
      </div>
    )
  }



}

export default Login;
