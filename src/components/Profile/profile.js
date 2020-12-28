import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user1Context";
import WhiteLink from '../../globalComponents/whiteLink';
import firebase from '../../firebase'
import Loader from "../../globalComponents/loader";

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
    if(user && !userDetailsLoading && (userDetails.address !== undefined)) {
      setaddressInput(userDetails.address);
      setprofessionInput(userDetails.profession)
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
      return (
        <p style={{ fontSize: "24px" }}>
        {user.name}<b>{user.name}</b>
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
    if(userDetails !== null) {
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
          })
          .catch(err => {
            window.alert('Unable to update', err)
            setprofileUpdateIsLoading(false)
          });
        }
    
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
          })
          .catch(err => {
            window.alert('Coudnot update your profile', err);
            setprofileUpdateIsLoading(false)
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

  return (
    <div className="body fontMontserrat">
      <div className="cardOne wahniBgColor flexCenter" id="profileHeight">
        <div className="profileBoxes profileBox1">
          {username()}
          <img onClick={() => onEditNameClick()} src='https://www.iconsdb.com/icons/preview/white/edit-xxl.png' alt="" />
          <p id="phoneNumber">{user.number}</p>
        </div>

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
        <div onClick={() => updateProfile()} className='updateProfileButton wahniColor'>
        {
          profileUpdateIsLoading ? 
          <Loader borderWidth='3px' width='10px'/>
          :
          <p><b>Update</b> Profile</p>
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
      </div>
      <WhiteLink onClick={() => onCompleteProfileClicked(true)}>
        <b>{updateORview()}</b> Your Profile
      </WhiteLink>
      <WhiteLink>
        <b>Go to</b> Quiz
      </WhiteLink>
    </div>
  );
}

export default Profile;
