import React from 'react';
import FooterCopyRight from './FooterCopyRight/FooterCopyRight';
import FooterMain from './FooterMain/FooterMain';
import Support from './Support/Support';

const Footer = () => {
    return (
        <div>
            <Support />
            <FooterMain />
            <FooterCopyRight />
        </div>
    );
};

export default Footer;