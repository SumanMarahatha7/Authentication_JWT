import React,{useState} from 'react';
import Loader from '../components/Loader';

export default function useLoader(){
    const [loading,setLoading] = useState(false)

    const setTrue = () => {
        setLoading(true);
    }

    const setFalse = () => {
        setLoading(false);
    }

    return [
        loading ? <Loader /> : null,
        setTrue,
        setFalse
    ]
}


