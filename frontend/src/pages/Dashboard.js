import React,{useEffect,useContext} from 'react';
import './pages.scss';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

export default function Dashboard(){

    const {user,setUser} = useContext(GlobalContext);

    const history = useHistory();

    const getUser = async () => {
        const res = await axios.get('/api/auth/dashboard',{
            headers : {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        setUser(res.data);
    }

    useEffect(() => {
        getUser();
    },[])

    if(!localStorage.getItem('token')){
        history.push('/login');
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUser({})
        history.push('/')
    }

    return(
        <div className="dashboard-container">
            <div className="card">
                <h2>Dashboard</h2>
                <h5>Welcome, {user && user.name}</h5>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
        )
}
