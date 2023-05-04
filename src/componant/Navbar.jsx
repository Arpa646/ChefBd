import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthMaster } from "./Contexapi";
import ActiveLink from "./ActiveLink/ActiveLink";
import '../App.css'
function Navnar() {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const { user,logOut,loading } = useContext(AuthMaster)
  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  const handleLogout=()=>{
    logOut()
}

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarTogglerDemo01"
          aria-expanded={navbarCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse fs-6 fw-semibold ${
            navbarCollapsed ? "show" : ""
          }`}
          id="navbarTogglerDemo01"
        >
          <a className="navbar-brand fs-2 fw-bold">
            <span className="Header">Job</span>Line
          </a>
          <ul className="navbar-nav nav-design m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ActiveLink className="nav-link active" to="/recipie">
                Recipie
              </ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink className="nav-link active" to="/">
               Home
              </ActiveLink>
            </li>
            <li className="nav-item">
              <ActiveLink className="nav-link active" to="/blog">
               Blog
              </ActiveLink>
            </li>
           
          </ul>
          <Link class="nav-item dropdown  ">
                           
                                
                           {/* {
                                   user ? <><span><img  title={user.displayName} src={user.photoURL} className='userPhoto rounded' alt='img'></img></span>  <Link  onClick={handleLogout}><button className='button2'>Logout</button></Link></> :<> <Link className='' to="/logIn"><button className='button2'>Login</button></Link> <Link  to="/Register"><button className='button2'>SignUp</button></Link></>
                               } */}
                               {
                                   user ? <><span> {user.photoURL?<img  title={user.displayName} src={user.photoURL} className='userPhoto rounded' alt='img'></img>:<FaUser></FaUser>} </span>  <Link  onClick={handleLogout}><button className='button2'>Logout</button></Link></> :<> <Link className='' to="/logIn"><button className='button2'>Login</button></Link> <Link  to="/Register"><button className='button2'>SignUp</button></Link></>
                               }


{}
                               
                        
                       </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navnar;
