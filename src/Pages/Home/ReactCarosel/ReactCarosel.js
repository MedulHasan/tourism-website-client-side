import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './ReactCarosel.css';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';

const ReactCarosel = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 30;
    return (
        <div style={{ padding: `0 ${chevronWidth}px`, fontSize: '24px' }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                gutter={20}
                leftChevron={<BsArrowLeftSquare />}
                rightChevron={<BsArrowRightSquare />}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div className="caresel-cont" >
                    <img className="carosel-img" src="https://media.istockphoto.com/photos/big-sur-bridge-california-ocean-road-costline-ca1-drone-shot-picture-id1096740592?b=1&k=20&m=1096740592&s=170667a&w=0&h=_P5dXjlwI0CmPOelngxQttm3R_ac4YKbwAzV_xYDe_c=" alt="" />
                </div>
                <div className="caresel-cont" >
                    <img className="carosel-img" src="https://media.istockphoto.com/photos/beautiful-view-of-manarola-at-night-picture-id181866352?b=1&k=20&m=181866352&s=170667a&w=0&h=_i45Z-mIjMzWLXYNNQ8vTKSRJHGZXimCkchKKyFQmpg=" alt="" />
                </div>
                <div className="caresel-cont" >
                    <img className="carosel-img" src="https://media.istockphoto.com/photos/aerial-view-of-sausalito-with-golden-gate-bridge-picture-id1210372220?b=1&k=20&m=1210372220&s=170667a&w=0&h=jeCXqHHRM9wRpjqjTN153nY-6ePhfhiehGcRqRWdh1U=" alt="" />
                </div>
                <div className="caresel-cont" >
                    <img className="carosel-img" src="https://media.istockphoto.com/photos/colorful-houses-of-portree-isle-of-skye-scotland-picture-id1306322994?b=1&k=20&m=1306322994&s=170667a&w=0&h=5317EiEJXGhbsYnw6xaZMWDUbFE4JnwEyXDhkrFYTz4=" alt="" />
                </div>
                <div className="caresel-cont" >
                    <img className="carosel-img" src="https://images.unsplash.com/photo-1511233389693-4a066f739752?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG9jZWFuJTIwaGlsbCUyMGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="caresel-cont" >
                    <img className="carosel-img" src="https://media.istockphoto.com/photos/rocky-coast-of-maine-in-autumn-picture-id577660170?b=1&k=20&m=577660170&s=170667a&w=0&h=09q5N-VCWwsugdvnBPuJobyJeMjHNRfOvSz7cQ3XXgk=" alt="" />
                </div>
            </ItemsCarousel>
        </div>
    );
};

export default ReactCarosel;
