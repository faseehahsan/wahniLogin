import { useState } from 'react';
import './app.css'


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
            <p><input type="email" placeholder="Email" name="email" /></p>
            <p><input type="password" placeholder="Password" name="password" /></p>
            <p className='button1'>SIGN UP</p>
          </div>
        </form>
      </div>

      <p className='descriptionText'>Already have an Account ?</p>
      <div className={loginContainer2}>
        <form className='form'>
        <div className={headerContainer2} onClick={handleLoginClick}>L O G I N</div>
          <div className={inputContainer2}>
            <p><input type="email" placeholder="Email" name="email" /></p>
            <p><input type="password" placeholder="Password" name="password" /></p>
            <p className='button1'>SIGN UP</p>
          </div>
        </form>
      </div>
      
    </div>

  );
}

export default Login;
