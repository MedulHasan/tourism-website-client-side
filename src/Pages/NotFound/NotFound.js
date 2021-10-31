import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import notFound from '../../image/404.png';
import './NotFound.css';

const NotFound404 = () => {
    const history = useHistory();
    const handleClickBack = () => {
        history.push('/');
    }
    return (
        <div className="not-found">
            <img src={notFound} alt="" />
            <br />
            <Button onClick={handleClickBack} className="back-btn" variant="success">Back To Home</Button>
        </div>
    );
};

export default NotFound404;