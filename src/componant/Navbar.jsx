import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[user,setUser]=useState(null)
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <Link class="nav-item">
          <a class="nav-link active" aria-current="page" >Recipie</a>
        </Link>
        <Link class="nav-item">
          <a class="nav-link" >Home</a>
        </Link>
        <Link class="nav-item">
          <a class="nav-link">Blog</a>
        </Link>
        <Link class="nav-item dropdown">
         
         {
            user?<><button>UserProfile</button></>:<><button>Login</button></>
         }
        </Link>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;