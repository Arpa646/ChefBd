import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';
import ChefPage from './chefPage/ChefPage';
import PartOne from './ExtraPart/PartOne';
import PartTwo from './ExtraPart/PartTwo';
import { AuthMaster } from './Contexapi';


const Home = () => {
    const {loading } = useContext(AuthMaster)
    if(loading)
    {
        return <h1>loading</h1>
    }
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