import React,{useState} from 'react';
import './components.scss';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import useLoader from '../hooks/useLoader';

export default function RegisterForm(){

    const [user,setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
    })

    const [loader, setTrue, setFalse] = useLoader();

    const history = useHistory()

    const{name,email,password} = user;

    const handleChange = (e) => {
        user[e.target.name] = e.target.value;
        setUser({...user,user});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTrue();
        try{
            await axios.post('/api/auth/register',{ name, email, password },
            {
                headers: {
                    "Content-Type" : "application/json",
                },
            }
            )

        setUser({
            name : '',
            email: '',
            password: '',
        })

        setFalse();

        history.push('/login');

        }
        catch(err){
            setFalse();
            alert(err.response.data.error);
            setUser({
            name : '',
            email: '',
            password: '',
        })
        }

    }

    return(
        <div className="register">
        <form className="register-form" onSubmit={handleSubmit}>

            <div className="form-section">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleChange} value={name} required/>
            </div>

            <div className="form-section">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} value={email} required/>
            </div>

            <div className="form-section">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} value={password} required/>
            </div>

            <button>Register</button> <span>{loader}</span>

            <h6>Already a user? <span><Link className="link" to="/login">Login</Link></span></h6>

        </form>

        </div>
        )
}
