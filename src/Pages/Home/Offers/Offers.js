import React from 'react';
import { Button } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs'
import './Offers.css'

const Offers = () => {
    return (
        <div className="offers-container">
            <div className="">
                <div className="offer-text">
                    <p>Don’t miss</p>
                    <h1>Special Offers</h1>
                </div>
                <div className="offer-card-container">
                    <div className="offers-card">
                        <img className="offers-img-bg" src="https://demo2.pavothemes.com/triply/wp-content/uploads/2020/11/h1_banner-1.jpg" alt="" />
                        <div className="offers-text">
                            <h1>Weekly <br />Flash Deals</h1>
                            <p>Up to 30% off</p>
                            <Button className="offer-btn" variant="outline-dark">View Deals <BsArrowRight /></Button>
                        </div>
                    </div>
                    <div className="offers-card">
                        <img className="offers-img-bg" src="https://demo2.pavothemes.com/triply/wp-content/uploads/2020/12/h1_banner-2.jpg" alt="" />
                        <div className="offers-text">
                            <h1>Summer <br />Escapes</h1>
                            <p>Plan your next trip</p>
                            <Button className="offer-btn" variant="outline-dark">Learn More <BsArrowRight /></Button>
                        </div>
                    </div>
                    <div className="offers-card">
                        <img className="offers-img-bg" src="https://demo2.pavothemes.com/triply/wp-content/uploads/2020/12/h1_banner-3.jpg" alt="" />
                        <div className="offers-text">
                            <h1>Exclusive <br />Deals</h1>
                            <p>Want to save up to 50%</p>
                            <Button className="offer-btn" variant="outline-dark">Subscribe us <BsArrowRight /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;