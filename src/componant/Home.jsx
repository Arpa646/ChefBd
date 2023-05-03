import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';
import ChefPage from './chefPage/ChefPage';
import PartOne from './ExtraPart/PartOne';
import PartTwo from './ExtraPart/PartTwo';


const Home = () => {
    return (
        <div className=''>
           <div className='banner-design '> <Navbar></Navbar>
            <Banner></Banner>
            </div>
            <ChefPage></ChefPage>
            <PartOne></PartOne>
            <PartTwo></PartTwo>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;