import React,{useContext} from 'react';
import './components.scss';
import {Link} from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

export default function Navbar(){

    const {user} = useContext(GlobalContext);

        if(Object.keys(user).length === 0){
            var navAuthState = <span style={{display:"flex"}}>
            <li><Link className="nav-item" to="/login">Login</Link></li>
            <li><Link className="nav-item" to="/register">Register</Link></li>
            </span>
        }

        else{
            navAuthState = <li><Link className="nav-item" to="/dashboard">Dashboard</Link></li>
        }

    return(
        <nav>
        <Link className="a" to="/">MERN_AUTH</Link>
        <ul className="nav-items">
            <li><Link className="nav-item" to="/">Home</Link></li>
                {navAuthState}
        </ul>
        </nav>
        )
}
