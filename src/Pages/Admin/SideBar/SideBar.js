import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { IoIosAdd } from 'react-icons/io';
import { MdCalendarViewMonth } from 'react-icons/md';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="side-bar-container">
            <Nav>
                <Nav.Link className="navBar-item" as={HashLink} to="/admin/all-user-booking"><MdCalendarViewMonth /> All User Booking</Nav.Link>
                <Nav.Link className="navBar-item" as={HashLink} to="/admin/add-new-tour"><IoIosAdd /> Add New Tour</Nav.Link>
            </Nav>
        </div>
    );
};

export default SideBar;