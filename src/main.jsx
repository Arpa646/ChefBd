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
import N from './N';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

  },

  {
    path: "/details/:id",
    element: <PrivateRoute><Details></Details></PrivateRoute>,
     loader: ({ params }) => fetch(`https://server-chef-arpa646.vercel.app/chef/${params.id}`)
    // loader: ({ params }) => fetch(`https://server-chef-arpa646.vercel.app/chef/${params.id}`)
  },
  {
    path:"/Register",
    element:<Signup></Signup>
  },
  {
    path:"/n",
    element:<N></N>
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
