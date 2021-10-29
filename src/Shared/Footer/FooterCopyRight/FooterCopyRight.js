import React from 'react';
import './FooterCopyRight.css';

const FooterCopyRight = () => {
    return (
        <div className="footer-copy-right">
            <p className="cory-right-name">Copyright &copy; 2021 <span>Triply</span>. Medul Hasan</p>
            <div className="footer-copy-option">
                <p>Privacy</p>
                <p>Policy</p>
                <p>About Us</p>
                <p>Support</p>
                <p>FAQ</p>
            </div>
        </div>
    );
};

export default FooterCopyRight;