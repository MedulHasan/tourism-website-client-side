import React from 'react';
import bn1 from '../../../image/banner/bn-1.jpg';
import bn2 from '../../../image/banner/bn-2.jpg';

import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="bg">
                <img className="banner-1" src={bn1} alt="" />
                <img className="banner-2" src="https://media.istockphoto.com/photos/stegastein-viewpoint-aurland-norway-picture-id982823522?k=20&m=982823522&s=612x612&w=0&h=6M5rWuRHJd9FPEDXpqv0f1C6boY8HctoSfxAStHgOm8=" alt="" />
            </div>
            <div className="banner-text">
                <p>Natural beauty</p>
                <h1>Discover the <br /> most engaging <br /> places</h1>
            </div>
        </div>
    );
};

export default Banner;