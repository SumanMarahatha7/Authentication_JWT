import React,{useState} from 'react';
import GlobalContext from './GlobalContext';


export default function ContextProvider(props){
    const [user,setUser] = useState({});
    return(
        <GlobalContext.Provider value={{
            user,setUser
        }}>
            {props.children}
        </GlobalContext.Provider>
        )
}
