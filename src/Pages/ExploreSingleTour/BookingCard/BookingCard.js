import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import usePopularTour from '../../../hooks/usePopularTour';
import './BookingCard.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingCard = () => {
    const history = useHistory();
    const { user } = useAuth();
    const { tour, singleTour } = usePopularTour();
    const [date, setDate] = useState('');
    const tourNameRef = useRef('');
    const nameRef = useRef('');
    const emailRef = useRef('');
    const timeRef = useRef('');
    const ticketsAdultRef = useRef(0);
    const ticketsYoungRef = useRef(0);
    const addressRef = useRef('');

    const notify = () => toast.success("Your booking Added!");

    const handleDate = (e) => {
        setDate(e.target.value);
    };


    const handleSubmitBooking = (e) => {
        e.preventDefault();
        const bookingData = {
            tourName: tourNameRef.current.value,
            name: nameRef.current.value,
            email: emailRef.current.value,
            date: date,
            time: timeRef.current.value,
            tickets: {
                adult: ticketsAdultRef.current.value,
                young: ticketsYoungRef.current.value
            },
            address: addressRef.current.value,
            tourPerPerson: tour.price,
            tourDuration: tour.duration
        };

        const url = `http://localhost:8888/tour-booking`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                history.push(`/your-booking/${emailRef.current.value}`);
            })

        notify()
    }
    return (
        <div className="booking-container">
            <h5 className="mb-4 fw-bolder d-flex">Book This Tour</h5>
            <Form onSubmit={handleSubmitBooking}>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicEmail">
                    <Form.Label className="mb-0">Tour Name</Form.Label>
                    <Form.Control style={{ width: '65%' }} type="text" placeholder="Your Name" ref={tourNameRef} value={singleTour.tour_place} readOnly />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicEmail">
                    <Form.Label className="mb-0">Your Name</Form.Label>
                    <Form.Control style={{ width: '65%' }} type="text" placeholder="Your Name" ref={nameRef} value={user.displayName} readOnly />
                </Form.Group>

                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicPassword">
                    <Form.Label className="mb-0">Your Email</Form.Label>
                    <Form.Control style={{ width: '65%' }} type="email" placeholder="Your Email" ref={emailRef} value={user.email} readOnly />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicPassword">
                    <Form.Label className="mb-0">From</Form.Label>
                    <Form.Control style={{ width: '65%' }} type="date" placeholder="Your Email" onChange={handleDate} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicPassword">
                    <Form.Label className="mb-0">Pickup Time</Form.Label>
                    <Form.Control style={{ width: '65%' }} type="time" placeholder="Your Email" ref={timeRef} value={date ? "22:00" : "0.00"} readOnly />
                </Form.Group>
                <Form.Group className="mb-3 justify-content-between align-items-center" controlId="formBasicPassword">
                    <Form.Label className="w-100 mb-0 d-flex">Tickets</Form.Label>
                    {
                        date ? (
                            <div className="ms-3">
                                <Form.Group className="d-flex justify-content-between align-items-center mb-3">
                                    <Form.Text className="mb-0">Adult (18+ years) <span className="fw-bolder text-danger">$100</span></Form.Text>
                                    <Form.Select ref={ticketsAdultRef} style={{ width: '35%' }}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="d-flex justify-content-between align-items-center">
                                    <Form.Text className="mb-0">Youth (8-17 years) <span className="fw-bolder text-danger">$80</span></Form.Text>
                                    <Form.Select ref={ticketsYoungRef} style={{ width: '35%' }}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        ) : (
                            <Form.Text className="text-muted w-100 d-flex justify-content-end">
                                please, select date first
                            </Form.Text>
                        )
                    }
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                    <Form.Label className="mb-0" >Pickup Address</Form.Label>
                    <Form.Control style={{ width: '65%' }} type="text" placeholder="Your Address" ref={addressRef} />
                </Form.Group>
                <Button className="w-100 book-now-btn" type="submit">
                    Book Now
                </Button>
            </Form>
        </div >
    );
};

export default BookingCard;