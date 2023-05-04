//import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { AuthMaster } from '../Contexapi';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';
import './user.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';


const Signup = () => {
  
  const navigate=useNavigate()
  const location=useLocation()
    console.log(location)
    const from=location.state?.from?.pathname || '/'
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const Githubprovider = new GithubAuthProvider();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { createUser,updateprofileData,user } = useContext(AuthMaster);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError('Password is required');
    }
    else if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters');
        return;
      }
     else {
      setPasswordError('');
    }
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name,email,password,photo)

    if (name && email && password) {
        createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate(from)
alert('user create')

updateprofileData(user,name,photo)
 .then(() => {
    console.log('profile update')
  }).catch((error) => {
    console.log(error.massage)
    // ...
  });


        //   if (photo) {
        //     const storageRef = app.storage().ref();
        //     const photoRef = storageRef.child(`users/${user.uid}/${photo.name}`);
        //     photoRef.put(photo)
        //       .then(() => {
        //         return photoRef.getDownloadURL();
        //       })
        //       .then((url) => {
        //         return user.updateProfile({
        //           photoURL: url,
        //         });
        //       })
              
             
        //       .catch((error) => {
        //         console.error(error.message);
        //       });
        //   } else {
        //     // sendEmailVerification(user);
        //     // alert('User created and verification email sent.');
        //   }
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
   
    
    else {
      setNameError(name ? '' : 'Name is required');
      setEmailError(email ? '' : 'Email is required');
      setPasswordError(password ? '' : 'Password is required');
      
    }
  };
console.log(user)
  const signInwithGoogle=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate(from)
        console.log(user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });
  }
  const signInwithGitHub=()=>{
    signInWithPopup(auth, Githubprovider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      // The signed-in user info.
      const user = result.user;
      navigate(from)
    console.log(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      
      // ...
     
    });
  }

  return (
    <div>
     <Navbar></Navbar>
      <div>
        <div className="form-style-6">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} />
          {nameError && <span className="error">{nameError}</span>}

            <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            {emailError && <span className="error">{emailError}</span>}
            <input type="password" name="pass" placeholder="Password" value={password} onChange={handlePasswordChange} />
            {passwordError && <span className="error">{passwordError}</span>}
            <input type="text" name="photo"  onChange={handlePhotoChange} placeholder="Upload Photo link" />
            <input type="submit" value="Create Account" />
            <p>already Have Account?<Link to="/logIn">SignIN</Link></p>
    
            <br />
          </form>
          <button className='btn btn-info m-3' onClick={signInwithGoogle}>SignUp with google</button>
          <button className='btn btn-info m-3' onClick={signInwithGitHub}>SignUp with Github</button>
        </div>
      </div>
      
    </div>
  );
};

export default Signup;
