import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';
import ChefPage from './chefPage/ChefPage';


const Home = () => {
    return (
        <div className='container'>
            <Navbar></Navbar>
            <Banner></Banner>
            <ChefPage></ChefPage>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;