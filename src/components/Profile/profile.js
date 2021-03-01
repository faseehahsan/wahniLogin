import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user1Context";
import WhiteLink from '../../globalComponents/whiteLink';
import firebase from '../../firebase'
import Loader from "../../globalComponents/loader";

import editIcon from '../../assets/edit-white-icon.png';
import logoutIcon from '../../assets/logout-white-icon.png'
import { Link } from "react-router-dom";

function Profile(props) {
  // user details and scores
  const userContextObject = useContext(UserContext);
  const user = userContextObject.user;
  const userScores = userContextObject.userScores;
  const userDetails = userContextObject.userDetails;
  const userDetailsLoading = userContextObject.userDetailsLoading;
  // profileUpdateIsLoading
  const [profileUpdateIsLoading, setprofileUpdateIsLoading] = useState(false)
  // inputs
  const [professionInput, setprofessionInput] = useState('')
  const [addressInput, setaddressInput] = useState('')

  
  // complete profile
const [completeProfileClicked, setcompleteProfileClicked] = useState(false)
  useEffect(() => {
    if(user && !userDetailsLoading && (userDetails !== undefined)) {
      if ((userDetails.address !== null) && (userDetails.address !== undefined)) {
        setaddressInput(userDetails.address);
      setprofessionInput(userDetails.profession)
      }
    }
  }, [userDetailsLoading]);

  const username = () => {
    
    if (user.name === null || user.name === undefined || user.name === '') {
      
      return (
        <p style={{ fontSize: "24px" }}>
        <b>Guest</b>
        </p>
      )
    }
    else {
      const usernameLength=user.name.length;
      const userNameAt12 = () => {
        if (usernameLength > 12) {
          return user.name.substring(0, 12) + '.'
        } else {
          return user.name
        }
      }
      const splitUsername = userNameAt12().split(' ');

      const firstName = splitUsername[0];
      const secondName = () => {
        if ((firstName.length < 12) && splitUsername[1]) {
          if (splitUsername[1].length > (12- firstName.length)) {
            return splitUsername[1].substring(0,12-firstName.length) + '.'
          } else {
            return splitUsername[1].substring(0,12-firstName.length)
          }
        } else {
          return ''
        }
      }
      
      return (
        <p style={{ fontSize: "24px" }}>
        {firstName}<b> {secondName()}</b>
        </p>
      )
    }
  };
  const numberOfTries = () => {
    if(userScores !== null && userScores !== undefined && (userScores.length > 0)) {
      return  userScores[0].attempt
    } else {
      return 0;
    }
  };
  const highScore = () => {
    if(userDetails !== null && userDetails !== undefined) {
      if ((userDetails.highestScore !== null) || (userDetails.highestScore !== undefined)) {
        return userDetails.highestScore
      } else {
        return 0
      }
    } else {
      return 0;
    }
  };

  function onEditNameClick() {
    var newName = window.prompt("Enter your new name", user.name);
    if(newName === null) {
      return;
    }
    else if (newName !== user.name) {
      setprofileUpdateIsLoading(true)
      firebase
          .auth()
          .currentUser
          .updateProfile({
            displayName: newName
          })
          .then(res => {
            window.alert('Your Profile has been Updated')
            setprofileUpdateIsLoading(false)
            window.location.reload();

          })
          .catch(err => {
            window.alert('Unable to update', err)
            setprofileUpdateIsLoading(false)
          });
        }
    
  }

  function logout() {
    //on log out click inside <Profile />
      firebase.auth().signOut();
    }

  function onCompleteProfileClicked() {
    if(completeProfileClicked) {
      setcompleteProfileClicked(false)
    } else {
      setcompleteProfileClicked(true)
    }
  }

  const updateORview = () => {
    if (completeProfileClicked) {
      return 'View'
    } else {
      return 'Update'
    }
  }

  function updateProfile() {
    if(profileUpdateIsLoading) {
      window.alert('Updation in progress')
    } else {
      if (addressInput !== '' && professionInput !== '') {
        if (addressInput !== userDetails.address || professionInput !== userDetails.profession) {
          setprofileUpdateIsLoading(true)
          firebase
          .firestore()
          .doc(`users/${user.id}`)
          .update({
            'address': addressInput,
            'profession' : professionInput,
          })
          .then(res => {
            window.alert('Your profile has been Updated');
            setprofileUpdateIsLoading(false)
            setcompleteProfileClicked(false)
          })
          .catch(err => {
            window.alert('Coudnot update your profile', err);
            setprofileUpdateIsLoading(false)
            setcompleteProfileClicked(false)
          })
        } else {
          window.alert('No changes detected')
        }
      } else {
        window.alert('Both fields cannot be empty')
      }
    }
  }
  //check if user object has a name
  //if NO name, complete registration form is shown else Profile is shown

  function generateRandoms(min, max, numOfRandoms, unique){
    /*min is the smallest possible generated number*/
    /*max is the largest possible generated number*/
    /*numOfRandoms is the number of random numbers to generate*/
    /*unique is a boolean specifying whether the generated random numbers need to be unique*/
      var getRandom = function(x, y){
        return Math.floor(Math.random() * (x - y + 1) + y);
      }
      var randoms = [];
      while(randoms.length<numOfRandoms){
        var random = getRandom(min, max);
        if(randoms.indexOf(random)==-1||!unique){
          randoms.push(random);
        }
      }
      // return randoms;
      console.log(randoms)
  }

  return (
    <div className="body fontMontserrat">
      <div className="cardOne wahniBgColor flexCenter" id="profileHeight">
        {
          completeProfileClicked ? 
          <div className="profileBoxes profileBoxForUpdate">
          <div>
          {username()}
          </div>
          <div className='editButtonContainer'>
          <img onClick={() => onEditNameClick()} src={editIcon} alt="Edit Name" />
          </div>
        </div>
          :
          <div className="profileBoxes profileBox1">
          <div>
          {username()}
          </div>
          <div className='editButtonContainer'>
          <img onClick={() => onEditNameClick()} src={editIcon} alt="Edit Name" />
          </div>
          <div>
          <p id="phoneNumber">{user.number}</p>
          </div>
        </div>
        }

        {
          completeProfileClicked ? 
          
          <div className='completeProfileInputContain'>
            <div className="numberInputContainer">
          <p>Profession <b>or Qualification</b></p>
          <input
            className="numberInput fontMontserrat"
            value={professionInput}
            onChange={(e) => setprofessionInput(e.target.value)}
            // type="number"
            placeholder='e.g. Student / B.Tech'
            name="mobile"
            required={true}
          />
        </div>
        <div style={{marginTop: '8px'}} className="numberInputContainer">
          <p>Your <b>Address</b></p>
          <input
            className="numberInput fontMontserrat"
            value={addressInput}
            onChange={(e) => setaddressInput(e.target.value)}
            // type="number"
            placeholder='e.g. Kechery, Thrissur - P.O 680519'
            name="mobile"
            required={true}
          />
        </div>
        <div className='updateProfileButton wahniColor'>
        {
          profileUpdateIsLoading ? 
          <Loader borderWidth='3px' width='10px'/>
          :
          <p onClick={() => updateProfile()}><b>Update</b> Profile</p>
        }
        {/* <img onClick={() => onEditNameClick()} src='https://www.iconsdb.com/icons/preview/white/save-as-xxl.png' alt="" /> */}
        </div>
          </div>

          :

          <div className="profileBoxes profileBox2">
          <div className="profileBox2singleRow">
            <p>
              Number of <b>Tries</b>
            </p>
            <p>
              <b>{numberOfTries()}</b>
            </p>
          </div>
          <div className="profileBox2singleRow">
            <p>
              High<b>score</b>
            </p>
            <p>
              <b>{highScore()}</b>
            </p>
          </div>
        </div>
        }
        
        {
          completeProfileClicked ?
          null :
          <div onClick={() => logout()} className='logOutIcon'>
            <p>Logout</p>
            <img src={logoutIcon} alt="Logout" />
          </div>
        }
      </div>
      <WhiteLink onClick={() => onCompleteProfileClicked(true)}>
        <b>{updateORview()}</b> Your Profile
      </WhiteLink>
      <div onClick={props.onClick} className='linkContainer'>
      <div
        className="linkContain wahniColor"
      >
          <Link to='/Quiz' className='flexContainFull linkToQuiz link wahniColor'>
          <p style={{ paddingLeft: "25px"}}>
          <b>Go to</b> Quiz</p>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Profile;
