import React from 'react';
import { ToastContainer } from 'react-toastify';
import Banner from './Banner/Banner';
import Offers from './Offers/Offers';
import PerfectDestination from './PerfectDestination/PerfectDestination';
import PopularTours from './PopularTours/PopularTours';

const Home = () => {
    return (
        <div>
            <ToastContainer />
            <Banner />
            <PopularTours />
            <Offers />
            <PerfectDestination />
        </div>
    );
};

export default Home;