/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img width='100px' src="https://demo2.pavothemes.com/triply/wp-content/uploads/2020/11/logo.svg" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/"><GoPrimitiveDot />HOME</Nav.Link>
                            {
                                user.email ? (
                                    <>
                                        <Nav.Link as={HashLink} to={`/your-booking/${user.email}`}><GoPrimitiveDot />YOUR BOOKING</Nav.Link>
                                        <Nav.Link as={HashLink} to="/admin/all-user-booking"><GoPrimitiveDot />ADMIN</Nav.Link>
                                        <Nav.Link as={HashLink} to="/" onClick={logOut}><GoPrimitiveDot />LOGOUT</Nav.Link>
                                        <Navbar.Text>Signed in as: <a>{user.email}</a></Navbar.Text>
                                    </>
                                ) : (
                                    <Nav.Link as={HashLink} to="/login"><GoPrimitiveDot />LOGIN</Nav.Link>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;