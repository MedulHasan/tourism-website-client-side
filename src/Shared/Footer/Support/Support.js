import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from 'react-icons/bs';

import './Support.css';

const Support = () => {
    return (
        <div className="support-container">
            <div>
                <p>Don’t wait any longer. Contact us!</p>
                <h2>
                    <FiPhoneCall /> +(88)01711 - 001122
                </h2>
            </div>
            <h2>
                <HiOutlineMail /> support@example.com
            </h2>
            <div>
                <p className="mb-0">Follow us</p>
                <p>
                    <BsFacebook className="support-icon" />
                    <BsYoutube className="support-icon" />
                    <BsTwitter className="support-icon" />
                    <BsInstagram className="support-icon" />
                </p>
            </div>
        </div>
    );
};

export default Support;