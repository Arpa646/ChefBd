import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './componant/Navbar.jsx';
import Home from './componant/Home.jsx';
import Details from './componant/Details/Details';
import Signup from './componant/Authentication/Signup';
import SignIn from './componant/Authentication/SignIn';
import ContexAuth from './componant/Contexapi';
import PrivateRoute from './PrivateRoute';
import Error from './componant/Error';
import Blog from './componant/blog/Blog';
import Recipie from './componant/Recipie';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

  },

  {
    path: "/details/:id",
    element: <PrivateRoute><Details></Details></PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:7000/chef/${params.id}`)
  },
  {
    path:"/Register",
    element:<Signup></Signup>
  },
  {
    path:"/logIn",
    element:<SignIn></SignIn>
  },
  {
    path:"/blog",
    element:<Blog></Blog>
  },
  {
    path:"/recipie",
    element:<Recipie></Recipie>
  }
  ,
  {
    path: '*',
    element:<Error></Error>
  }
  

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ContexAuth><RouterProvider router={router} /></ContexAuth>
)
