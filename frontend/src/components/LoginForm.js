import React,{useState} from 'react';
import './components.scss';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import useLoader from '../hooks/useLoader';


export default function LoginForm(){

    const [user,setUser] = useState({
        email: "",
        password: "",
    })



    let history = useHistory();

    const{email,password} = user;

    const [loader,setTrue,setFalse] = useLoader();

    const handleChange = (e) => {
        user[e.target.name] = e.target.value;
        setUser({...user,user});
    }

    const handleSubmit  = async(e) => {
        e.preventDefault();
        setTrue();
        try {
            const res = await axios.post('/api/auth/login',{email,password},
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
            )

            localStorage.setItem('token', res.data.token)

            setFalse();

            setUser({
                email: '',
                password: '',
            })

            history.push('/dashboard');
        }

        catch(err) {
            setFalse();
            alert(err.response.data.error)
            setUser({
                email: '',
                password: '',
            })
        }
    }

    return(
            <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>

            <div className="form-section">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={handleChange} required />
            </div>

            <div className="form-section">
                <label htmlFor="name">Password</label>
                <input type="password" name="password" value={password} onChange={handleChange} required />
            </div>

            <button>Login</button> <span>{loader}</span>
            <h6>Not yet user? <span><Link className="link" to="/register">Register</Link></span></h6>
            </form>
            </div>
        )
}
