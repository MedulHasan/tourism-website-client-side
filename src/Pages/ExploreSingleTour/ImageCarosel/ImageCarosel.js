import React from 'react';
import { FaLocationArrow } from 'react-icons/fa'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { BsClock, BsPeople } from 'react-icons/bs'
import usePopularTour from '../../../hooks/usePopularTour';
import './ImageCarosel.css';

const ImageCarosel = () => {
    const { singleTour } = usePopularTour();
    return (
        <div>
            <img className="img-single-tour" src={singleTour.img} alt="" />
            <div className="info-item-cont">
                <div className="info-item">
                    <MdOutlineAttachMoney className="info-icon" />
                    <div>
                        <p>Price</p>
                        <span className="d-flex">Per Person <p className="ms-2 price-info"> ${singleTour.price}</p></span>
                    </div>
                </div>
                <div className="info-item">
                    <BsClock className="info-icon" />
                    <div>
                        <p>Duration</p>
                        <span>{singleTour.duration} days</span>
                    </div>
                </div>
                <div className="info-item">
                    <BsPeople className="info-icon" />
                    <div>
                        <p>Max People</p>
                        <span>{singleTour.map_people}</span>
                    </div>
                </div>
                <div className="info-item">
                    <FaLocationArrow className="info-icon" />
                    <div>
                        <p>Tour Type</p>
                        <span>{singleTour.tour_type}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCarosel;