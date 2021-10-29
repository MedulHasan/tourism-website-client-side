import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const PopularTour = createContext();

const PopularTourProvider = ({ children }) => {

    const [popularTours, setPopularTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/popular-tours')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPopularTours(data)
            })
    }, [])

    const value = {
        popularTours
    };

    return (
        <PopularTour.Provider value={value}>
            {children}
        </PopularTour.Provider>
    );
};

export default PopularTourProvider;