import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';
import ChefPage from './chefPage/ChefPage';
import PartOne from './ExtraPart/PartOne';
import PartTwo from './ExtraPart/PartTwo';
import { AuthMaster } from './Contexapi';
import Footer from './Footer';

//This is home page where banner navbar footer extra two part
const Home = () => {
    const {loading } = useContext(AuthMaster)
    if(loading)
    {
        return <div class="d-flex justify-content-center my-5">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    }
    return (
        <div className=''>
           <div className='banner-design '> <Navbar></Navbar>
            <Banner></Banner>
            </div>
            <ChefPage></ChefPage>
            <PartOne></PartOne>
            <PartTwo></PartTwo>
            <Footer></Footer>
        </div>
    );
};

export default Home;