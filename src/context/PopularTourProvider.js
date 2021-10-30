import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const PopularTour = createContext();

const PopularTourProvider = ({ children }) => {

    const [tour, setTour] = useState([]);
    const [singleTour, setSingleTour] = useState({});
    const [tourBooking, setTourBooking] = useState([]);

    const addTour = (item) => {
        setTour(item)
    };

    const singleTout = (singleItem) => {
        setSingleTour(singleItem)
    };

    const bookingTour = (bookData) => {

    };

    const value = {
        tour,
        addTour,
        singleTout,
        singleTour,
        bookingTour
    };

    return (
        <PopularTour.Provider value={value}>
            {children}
        </PopularTour.Provider>
    );
};

export default PopularTourProvider;