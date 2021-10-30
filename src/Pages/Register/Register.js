import React from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const auth = getAuth();
    const { signUpUsingEmailAndPassword } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.form || '/';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const notify = () => toast.success("Registration Successfully!");

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            signUpUsingEmailAndPassword(email, password)
                .then((result) => {
                    updateProfile(auth.currentUser, { displayName: name })
                        .then(() => { })
                    history.push(redirect_url)
                })
        }
        notify();

    }
    return (
        <div>
            <div className="login-container">
                <div className="login-form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Control required onBlur={handleName} className="mb-3 l-form" type="text" placeholder="Enter Name" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                        <Form.Control required onBlur={handleEmail} className="mb-3 l-form" type="email" placeholder="Enter email" />
                        <Form.Control required onBlur={handlePassword} className="mb-3 l-form" type="password" placeholder="Password" />
                        <Form.Control required onBlur={handleConfirmPassword} className="mb-3 l-form" type="password" placeholder="Confirm Password" />
                        <Button className="mb-2 w-100 l-form" variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <Link to="/login">Already have an account</Link>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Signup;