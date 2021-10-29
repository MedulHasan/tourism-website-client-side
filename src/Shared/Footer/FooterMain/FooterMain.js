import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { GoLocation } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';

import './FooterMain.css';

const FooterMain = () => {
    return (
        <div className="footer-main">
            <div className="footer-about-us">
                <img className="mb-2" width='100px' src="https://demo2.pavothemes.com/triply/wp-content/uploads/2020/11/logo-white.svg" alt="" />
                <p>Nisi ut aliquip ex ea commodo consequatute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla  excepteur pariatur.</p>
                <div className="d-flex align-items-center">
                    <GoLocation className="me-2" />
                    <p>Malibag, Dhaka, 1217</p>
                </div>
            </div>
            <div className="footer-about-us">
                <h2>Our Services</h2>
                <div>
                    <p>Booking</p>
                    <p>Rental Car</p>
                    <p>Hostel World</p>
                    <p>Trip Advisor</p>
                </div>
            </div>
            <div className="footer-about-us">
                <h2>Explore</h2>
                <div>
                    <p>Saint martin</p>
                    <p>Rangamati</p>
                    <p>Bali</p>
                    <p>Berlin City</p>
                    <p>Barcelona Tour</p>
                </div>
            </div>
            <div className="footer-about-us">
                <h2>Get Updates & More</h2>
                <p>Subscribe to the free newsletter and stay up to date</p>
                <div className="w-100">
                    <Form.Control className="mb-3" type="email" placeholder="Enter email" />
                    <Button className="subscribe-btn" variant="outline-warning">Subscribe <BsArrowRight /></Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default FooterMain;