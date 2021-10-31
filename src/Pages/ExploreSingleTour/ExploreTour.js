/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import usePopularTour from '../../hooks/usePopularTour';
import BookingCard from './BookingCard/BookingCard';
import ImageCarosel from './ImageCarosel/ImageCarosel';
import Information from './Information/Information';
import Title from './Title/Title';
import './ExploreTour.css';

const ExploreTour = () => {
    const { id } = useParams();
    const { singleTout } = usePopularTour();

    useEffect(() => {
        fetch(`https://triply-medul.herokuapp.com/popular-tours/${id}`)
            .then(res => res.json())
            .then(data => singleTout(data))
    }, []);
    return (
        <div>
            <Title />
            <ImageCarosel />
            <div className="info-book">
                <Information />
                <BookingCard />
            </div>
        </div>
    );
};

export default ExploreTour;