import React from 'react';
import Banner from './Banner/Banner';
import Offers from './Offers/Offers';
import PerfectDestination from './PerfectDestination/PerfectDestination';
import PopularTours from './PopularTours/PopularTours';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularTours />
            <Offers />
            <PerfectDestination />
        </div>
    );
};

export default Home;