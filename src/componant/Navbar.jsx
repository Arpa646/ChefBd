import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthMaster } from './Contexapi';
import '../App.css'
const Navbar = () => {
    const { user,logOut,loading } = useContext(AuthMaster)
    console.log(user)
    const handleLogout=()=>{
        logOut()
    }
    if(loading)
    {
        return <h1>loading</h1>
    }
    //  const[userr,setUser]=useState(null)
    return (
        <div className='p-3'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav nav-design  w-100">
                            <div className='me-auto'>
                            <Link class="">
                                <a class="" aria-current="page" >Recipie</a>
                            </Link>
                            <Link to="/">
                                <a class="" >Home</a>
                            </Link>
                            <Link class="">
                                <a class="">Blog</a>
                            </Link>
                            </div>
                            {/* <Link to="/logIn"><button>Login</button></Link>
        <Link to="/Register"><button>SignUp</button></Link> */}
                           <div>
                           <Link class="nav-item dropdown  ">
                           
                                
                                {
                                        user ? <><img  title={user.displayName} src={user.photoURL} className='userPhoto rounded' alt='img'></img>  <button className='btn btn-info' onClick={handleLogout}>Logout</button></> :<> <Link to="/logIn"><button>Login</button></Link> <Link to="/Register"><button>SignUp</button></Link></>
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