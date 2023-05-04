import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,signInWithPopup, GoogleAuthProvider , signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase.init';
//this is context api page where user
//if we share anything then it give all route of the website

const auth=getAuth(app)
//crating contexu;;

export const AuthMaster=createContext(null);
const provider = new GoogleAuthProvider();

 


const ContexAuth = ({children}) => {
   const [loading,setLoading]=useState(true);
//creating auth provider
const createUser=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
const createUserwithGoogle=()=>{
return signInWithPopup(auth, provider)
}
const LogIn=(email,password)=>{
return signInWithEmailAndPassword(auth,email,password)
}

const [user,setUser]=useState('')
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
    });
    return()=>{
        unsubscribe()
    }
},[])
const logOut=()=>{
    return signOut(auth)
}


const updateprofileData=(user,name,photo)=>{
   updateProfile(user,{
    displayName:name,
    photoURL : photo
    
   })
   
}




const authinfo={
    updateprofileData,
    createUserwithGoogle,
    createUser,
    user
    ,logOut,
    loading,
    LogIn

}
    return (

        <AuthMaster.Provider value={authinfo}>
        {children}
        </AuthMaster.Provider>
    );
};

export default ContexAuth;