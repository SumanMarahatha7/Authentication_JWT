import React from 'react';
import './pages.scss';
import LoginForm from '../components/LoginForm';

export default function Login(){
    return(
        <div className="login-container">
        <h2>Login into your Account</h2>
        <LoginForm />
        </div>
        )
}
