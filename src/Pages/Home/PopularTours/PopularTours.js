import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { Button } from 'react-bootstrap';
import usePopularTour from '../../../hooks/usePopularTour';
import './PopularTours.css';


const PopularTours = () => {
    const { popularTours } = usePopularTour();
    return (
        <div className="popular-tour">
            <div className="popular-tour-heading">
                <p>What’s new</p>
                <h1 className="fs-1 mb-5">Popular Tours</h1>
            </div>
            <div className="popular-tour-container">
                {
                    popularTours.map(tour =>
                        <div key={tour._id} className="single-tour">
                            <img src={tour.images.img1} alt="" />
                            <h3 className="mt-5">{tour.tour_place}</h3>
                            <hr className="mx-4" />
                            <div className="p-4 explore">
                                <div>
                                    <p className="mb-0">From</p>
                                    <h4><span>$</span>{tour.price}</h4>
                                </div>
                                <Button className="explore-btn" variant="outline-dark">Explore <BsArrowRight /></Button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularTours;