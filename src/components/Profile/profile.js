import React, {useState, useEffect} from 'react';
import firebase from '../../firebase'
// import * as firebase from 'firebase';




function Profile(props) {

  
  const { user, logout }  = props;
  const [url, setUrl] = useState();
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
    if(user.photoURL !== null) {
    setUrl(user.photoURL)
    } else {
      setUrl('https://image.flaticon.com/icons/png/512/2922/2922532.png')
    };
    setImageLoading(false)
  }, [])

  function profilePicUpdate(file) {
    setImageLoading(true);
    firebase.storage().ref('users/' + user.id + '.jpg').put(file).then(ell => {
      getURL()
    }).catch(err => {
      alert(err);
      setImageLoading(false)
    })
  }

  function getURL() {
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

  return (
        <div className='body'>
        <div className='login-container loginresponsive profileContainer'>
          <div className='form'>
          <div className='profileImageContainer'>
          {
            imageLoading ? <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' alt="" /> : <img src={url} alt="" />

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
          <p className='button1' type='button' onClick={() => logout()}>LOGOUT</p>

          </div>

          </div>

          </div>
        </div>
    </div>

  );
}

export default Profile;
