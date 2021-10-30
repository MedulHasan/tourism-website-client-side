import React from 'react';
import './PerfectDestination.css';
import ReactCarosel from '../ReactCarosel/ReactCarosel';

const PerfectDestination = () => {
    return (
        <div className="perfect-destination-container">
            <div className="perfect-destination">
                {/* <img className="perfect-destination-bg" src={perfect} alt="" /> */}
                <div className="perfect-destination-text">
                    <p>Places to go</p>
                    <h1>Perfect <br /> Destinations</h1><br />
                    <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    <div className="d-flex mt-5 justify-content-between me-3">
                        <div>
                            <h6>Africa (2)</h6>
                            <h6>Argentina (2)</h6>
                            <h6>switzerland (3)</h6>
                            <h6>Combodia (2)</h6>
                        </div>
                        <div>
                            <h6>Americas (1)</h6>
                            <h6>Asia (2)</h6>
                            <h6>Germany (3)</h6>
                            <h6>Dubai (2)</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carosel">
                <ReactCarosel />
            </div>
        </div>
    );
};

export default PerfectDestination;