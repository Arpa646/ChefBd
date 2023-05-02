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




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
   
  },
 
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
