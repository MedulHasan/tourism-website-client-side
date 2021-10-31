import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddNewTour.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewTour = () => {

    const tourPlaceRef = useRef('');
    const tourTypeRef = useRef('');
    const locationRef = useRef('');
    const priceRef = useRef(0);
    const tourDurationRef = useRef('');
    const maxPeopleRef = useRef(0);
    const imageUrlRef = useRef('');

    const notify = () => toast("New Tour Added Successfully");

    const handleSubmitBooking = (e) => {
        e.preventDefault();
        const newTour = {
            tour_place: tourPlaceRef.current.value,
            tour_type: tourTypeRef.current.value,
            location: locationRef.current.value,
            price: priceRef.current.value,
            duration: tourDurationRef.current.value,
            map_people: maxPeopleRef.current.value,
            img: imageUrlRef.current.value
        };
        fetch(`http://localhost:8888/add-new-tour`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTour)
        })
            .then(res => res.json())
            .then(data => {
                notify();
            })
    }
    return (
        <div className="add-tour-form">
            <Form className="new-tour-form" onSubmit={handleSubmitBooking}>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicEmail">
                    {/* <Form.Label className="mb-0">Tour Name</Form.Label> */}
                    <Form.Control type="text" placeholder="Tour Place" ref={tourPlaceRef} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Tour Type" ref={tourTypeRef} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Location" ref={locationRef} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Price in $" ref={priceRef} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Tour Duration" ref={tourDurationRef} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Max People" ref={maxPeopleRef} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Image Url" ref={imageUrlRef} />
                </Form.Group>
                <Button className="w-100 book-now-btn" type="submit">
                    Add Tour
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default AddNewTour;