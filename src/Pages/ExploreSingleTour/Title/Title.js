import React from 'react';
import { GoLocation } from 'react-icons/go';
import usePopularTour from '../../../hooks/usePopularTour';
import './Title.css';

const Title = () => {
    const { singleTour } = usePopularTour();
    return (
        <div className="my-5 explore-tour-title">
            <h1>{singleTour.tour_place}</h1>
            <p><GoLocation /> {singleTour.location}</p>
        </div>
    );
};

export default Title;