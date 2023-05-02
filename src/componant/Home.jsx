import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;