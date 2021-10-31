/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import swal from 'sweetalert';
import { Button, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './YourBooking.css';

const YourBooking = () => {
    const { user } = useAuth();
    const [myBooking, setMyBooking] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8888/tour-booking/${user.email}`)
            .then(res => res.json())
            .then(order => setMyBooking(order))
    }, []);

    const handleDeleteOrder = (id) => {
        const remainingOrder = myBooking.filter(item => item._id !== id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover your document!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    setMyBooking(remainingOrder);
                    fetch(`http://localhost:8888/tour-booking/${user.email}/${id}`, {
                        method: 'DELETE'
                    })
                    swal("Poof! Your document has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your document is safe!");
                }
            });
    }

    if (myBooking.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div className="your-booking-container">
            {
                myBooking.length <= 0 ? (
                    <h2>Your Booking List is Empty</h2>
                ) : (
                    myBooking.map(booking =>
                        <div key={booking._id} className="single-billing">
                            <div className="d-flex justify-content-between">
                                <h3>Your Billing</h3>
                                <p className={booking.status === 'approved' ? 'approved' : 'pending'}>{booking.status}</p>
                            </div>
                            <table className="table table-bordered table-container">
                                <tbody>
                                    <tr>
                                        <td>Your Name</td>
                                        <td>{booking.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Your Email</td>
                                        <td>{booking.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Tour Spot</td>
                                        <td>{booking.tourName}</td>
                                    </tr>
                                    <tr>
                                        <td>Tour Duration</td>
                                        <td>{booking.tourDuration || 0} days</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>{booking.date}</td>
                                    </tr>
                                    <tr>
                                        <td>Pickup Time</td>
                                        <td>{booking.time}</td>
                                    </tr>
                                    <tr>
                                        <td>Pickup Location</td>
                                        <td>{booking.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Tour Price/person</td>
                                        <td>${booking.tourPerPerson}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Tickets
                                            <ul className="tickets">
                                                <li>Adult - {booking.tickets.adult} person</li>
                                                <li>Young - {booking.tickets.young} person</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <br />
                                            <ul>
                                                <li>${booking.tickets.adult * 100}</li>
                                                <li>${booking.tickets.young * 80}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Total Price</td>
                                        <td>${(parseInt(booking.tourPerPerson) * (parseInt(booking.tickets.adult) + parseInt(booking.tickets.young))) + (parseInt(booking.tickets.adult) * 100) + (parseInt(booking.tickets.young) * 80)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="delete-place-btn">
                                <Button onClick={() => handleDeleteOrder(booking._id)} variant="outline-danger">Delete Order</Button>{' '}
                                <Button variant="outline-primary">Place Order</Button>{' '}
                            </div>
                        </div>
                    )
                )
            }
            <ToastContainer />
        </div>
    );
};

export default YourBooking;