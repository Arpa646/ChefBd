import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthMaster } from './Contexapi';
import '../App.css'
import ActiveLink from './ActiveLink/ActiveLink';
const Navbar = () => {
    const { user,logOut,loading } = useContext(AuthMaster)
    console.log(user)
    const handleLogout=()=>{
        logOut()
    }
    // if(loading)
    // {
    //     return <h1>loading</h1>
    // }
    //  const[userr,setUser]=useState(null)
    return (
        <div className='p-2  navdesign '>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <h2 class="" href="#">Navbar</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav nav-design  w-100">
                            <div className='m-auto  mt-2'>
                            <ActiveLink to="/recipie">
                                Recipie
                            </ActiveLink>
                            <ActiveLink to="/">
                                Home
                            </ActiveLink>
                            <ActiveLink to="/blog">
                               Blog
                            </ActiveLink>
                            </div>

                           <div>
                           <Link class="nav-item dropdown  ">
                           
                                
                                {
                                        user ? <><span><img  title={user.displayName} src={user.photoURL} className='userPhoto rounded' alt='img'></img></span>  <Link  onClick={handleLogout}><button className='button2'>Logout</button></Link></> :<> <Link className='' to="/logIn"><button className='button2'>Login</button></Link> <Link  to="/Register"><button className='button2'>SignUp</button></Link></>
                                    }
                             
                            </Link>
                           </div>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;