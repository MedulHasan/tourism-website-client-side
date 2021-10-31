import React from 'react';
import { Button } from 'react-bootstrap';
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { useHistory } from 'react-router';
import orderDone from '../../image/4212138.jpg';
import './OrderDone.css';

const OrderDone = () => {
    const history = useHistory();
    const handleClickBack = () => {
        history.push('/');
    }
    return (
        <div className="order-done">
            <h1><BsFillPatchCheckFill /> Booking Successfully!!!</h1>
            <img src={orderDone} alt="" /><br />
            <Button onClick={handleClickBack} className="back-btn mt-1" variant="success">Back To Home</Button>
        </div>
    );
};

export default OrderDone;