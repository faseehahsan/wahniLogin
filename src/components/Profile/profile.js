import React, {useState, useEffect} from 'react';
import firebase from '../../firebase'
// import * as firebase from 'firebase';

import { Formik } from "formik";
import * as Yup from "yup";

import "../questionsScreen/questionScreen.css";

function Profile(props) {

  
  const { user, logout, completeProfile }  = props;
  const [url, setUrl] = useState();
  const [imageLoading, setImageLoading] = useState(true);


  useEffect(() => {
    setImageLoading(true);
    // check if user object has a url for profile image
    if(user.photoURL !== null) {
    setUrl(user.photoURL)
    } else {
      setUrl('https://image.flaticon.com/icons/png/512/2922/2922532.png')
    };
    setImageLoading(false)
  }, [])

  function profilePicUpdate(file) {
    // to update the profile picture
    setImageLoading(true);
    firebase.storage().ref('users/' + user.id + '.jpg').put(file).then(ell => {
      // get the url of the image uploaded to firebase
      getURL()
    }).catch(err => {
      alert(err);
      setImageLoading(false)
    })
  }

  function getURL() {
    // get the url of the image uploaded to firebase
    firebase.storage().ref().child("users/" + user.id + '.jpg').getDownloadURL().then(url1 => {
      console.log(url1);
      setUrl(url1);
      setImageLoading(false);
      firebase.auth().currentUser.updateProfile({
        photoURL: url1
      });
    }).catch(err => {
      alert(err);
      setImageLoading(false)
    })
  }

  //check if user object has a name
  //if NO name, complete registration form is shown else Profile is shown
  
  if (user.name === null || user.name === '') {
    return(
      <div className='body'>
      <div className='login-container card1 responsiveWidth profileContainer'>
        <div className='form'>
        <div className='profileImageContainer'>
        {
          imageLoading ? <img src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt="" /> : <img src={url} alt="" />

        }
        
        <input type='file' title='hello' id='files' onChange={e => profilePicUpdate(e.target.files[0])} />
        <label for="files" className='labelForFile'>Edit Avatar</label>

        </div>

        <div className='profileDetailsContainer'>
        <h2 style={{alignSelf:'center'}}>Complete Your Profile</h2>

        <Formik
            initialValues={{
              nameInput: "",
            }}
            onSubmit={(values) => completeProfile(values.nameInput)}
            validationSchema={Yup.object().shape({
              nameInput: Yup.string().required("*this is a required field"),
            })}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <div className='labelClass'>Enter Name</div>

                  <input
                    id="nameInput"
                    placeholder="e.g. John"
                    type="text"
                    value={values.nameInput}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.nameInput && touched.nameInput
                        ? "inputStyle error"
                        : "inputStyle"
                    }
                  />
                  <div style={{marginLeft: '8%'}}>
                  {errors.nameInput && touched.nameInput && (
                    <div className="input-feedback">{errors.nameInput}</div>
                  )}
                  </div>

                  
                  <div style={{display:'flex', justifyContent:'center', paddingTop:'20px'}}>
                  <button type="submit" className='submitButton1'>SAVE PROFILE</button>
                  </div>
                </form>
              );
            }}
          </Formik>

        </div>

        </div>
      </div>
  </div>
    )
  } else {
    return (
      <div className='body'>
      <div className='login-container card1 loginresponsive profileContainer'>
        <div className='form'>
        <div className='profileImageContainer'>
        {
          imageLoading ? <img src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt="" /> : <img src={url} alt="" />

        }
        
        <input type='file' title='hello' id='files' onChange={e => profilePicUpdate(e.target.files[0])} />
        <label for="files" className='labelForFile'>Edit Avatar</label>

        </div>
        <div className='profileDetailsContainer'>
        <div>
        <p className='profileText'>Name: {user.name}</p>
        <p className='profileText'>Phone No.: {user.number}</p>
        <p className='profileText'>No. of Attempts: </p>
        <p className='profileText'>Highest Score: </p>
        <div className='flexCenter'>
        <div className='button1' type='button' onClick={() => logout()}>LOGOUT</div>
        </div>

        </div>

        </div>

        </div>
      </div>
  </div>
    );

  }

}

export default Profile;
