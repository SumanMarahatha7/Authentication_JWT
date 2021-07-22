import React from 'react';
import './pages.scss';
import RegisterForm from '../components/RegisterForm';

export default function Register(){
    return(
        <div className="register-container">
        <h2>Create an Account</h2>
        <RegisterForm />
        </div>
        )
}
