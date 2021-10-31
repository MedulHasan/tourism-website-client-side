import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import './Admin.css';
import AllUserBooking from './AllUserBooking/AllUserBooking';
import AddNewTour from './AddNewTour/AddNewTour';

const Admin = () => {
    return (
        <div className="admin-container">
            <BrowserRouter>
                <SideBar />
                <Switch>
                    <Route path="/admin/all-user-booking">
                        <AllUserBooking />
                    </Route>
                    <Route path="/admin/add-new-tour">
                        <AddNewTour />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Admin;