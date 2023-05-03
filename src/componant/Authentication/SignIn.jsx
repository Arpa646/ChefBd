//import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { AuthMaster } from '../Contexapi';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';


const SignIn = () => {
    const navigate=useNavigate()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const location=useLocation()
    console.log(location)
    const from=location.state?.from?.pathname || '/'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { LogIn } = useContext(AuthMaster);
    
const [error,setError]=useState('')

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

    // const handlePhotoChange = (e) => {
    //     setPhoto(e.target.files[0]);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email, password)

        if (email && password) {
            LogIn(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    alert('user logIn')
                    console.log(user)

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
        } else {
           
            setEmailError(email ? '' : 'Email is required');
            setPasswordError(password ? '' : 'Password is required');

        }
    };

    const signInwithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
               
                console.log(user)
                navigate(from)
                
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
                // ...
            });
    }

    return (
        <div>
        <Navbar></Navbar>
            <div>
                <div className="form-style-6">
                    <h1>Create Account</h1>
                    <p>{error}</p>
                    <form onSubmit={handleSubmit}>
                       
                        <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                        {emailError && <span className="error">{emailError}</span>}
                        <input type="password" name="pass" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        {passwordError && <span className="error">{passwordError}</span>}

                        <p>yet not register?<Link to="/Register">SignUp</Link></p>
                        <input type="submit" value="Create Account" />
                       
                        <br />
                    </form>
                    <button className='btn btn-info mt-3' onClick={signInwithGoogle}>SignIn with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
