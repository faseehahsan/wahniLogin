import React from 'react';


function Profile(props) {
  const { user, loginContainer1, inputContainer1, handleRegisterClick, headerContainer1} = props;

  return (
        <div className='body'>
                <img src="https://image.flaticon.com/icons/png/512/2922/2922532.png" alt="" />
        <div className='login-container loginresponsive profileContainer'>
          <div className='form'>
          <div className='profileImageContainer'>
          IMAGE
          </div>
          <div className='profileDetailsContainer'>
          DETAILS
          </div>
          
          </div>
        </div>
    </div>

  );
}

export default Profile;
