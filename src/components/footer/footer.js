import React from 'react';
import './footer.css';
import logo from '../../assets/wg.png'

function Footer() {
    return (
      
      <div className='footerDiv'>
          <div className='footerContain1'>
          <img src={logo} className="footerLogo" alt="logo" />
          </div>
          <div className='footerContain2 wahniColor'>
            <p id='fontResponsive'>
                പരാതികൾ complaints@wahni.com
                <br /><br />
                എല്ലാവർക്കും ഉപകാരപ്പെടുന്നതരത്തിൽ ഉള്ള പൊതുവായ ചോദ്യങ്ങൾ http:/ask.wahni.com -ഇൽ ചോദിക്കുന്നതായിരിക്കും കൂടുതൽ നന്നാവുക
            </p>
          </div>
      </div>
  
    );
  }
  
  export default Footer;
  