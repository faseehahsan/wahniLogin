import { useState } from 'react';
import './app.css'
import { Link } from 'react-router-dom'



function Login() {

  const [loginClicked, setLoginClicked] = useState(false);
  const [registerClicked, setRegisterClicked] = useState(false);

  const loginContainer1 = registerClicked ? 'login-container loginresponsive': 'login-container loginresponsive hide-login';
  const headerContainer1 = registerClicked ? 'header': 'header headerHover';
  const inputContainer1 = registerClicked ? 'input-container' : 'input-container hide-section';

  const loginContainer2 = loginClicked ? 'login-container loginresponsive': 'login-container loginresponsive hide-login';
  const headerContainer2 = loginClicked ? 'header': 'header headerHover';
  const inputContainer2 = loginClicked ? 'input-container' : 'input-container hide-section';
  

  function handleRegisterClick(e) {
    setRegisterClicked(true)
    setLoginClicked(false)
  }
  function handleLoginClick(e) {
    setRegisterClicked(false)
    setLoginClicked(true)
  }
  

  return (
    <div className='body'>
              <img src="https://image.flaticon.com/icons/png/512/2922/2922532.png" alt="" />
    <p className='descriptionText'></p>
      <div className={loginContainer1}>
        <form className='form'>
        <div className={headerContainer1} onClick={handleRegisterClick}>R E G I S T E R</div>
          <div className={inputContainer1}>
            <p><input type="text" placeholder="Name" name="name" /></p>
            <p><input type="number" placeholder="Mobile Number" name="mobile" /></p>
            <p className='button1'>SIGN UP</p>
          </div>
        </form>
      </div>

      <p className='descriptionText'>Already have an Account ?</p>
      <div className={loginContainer2}>
        <form className='form'>
        <div className={headerContainer2} onClick={handleLoginClick}>L O G I N</div>
          <div className={inputContainer2}>
            <p><input type="number" placeholder="Mobile number" name="mobile" /></p>
            <p><input type="password" placeholder="Enter OTP" name="otp" /></p>
            <p className='button1'>SIGN IN</p>
          </div>
          <div onClick={() => console.log(5)}>Hello</div>
          <Link to='/goto' className="brand-logo left">NE Plan</Link>

        </form>
      </div>
      
    </div>

  );
}

export default Login;
