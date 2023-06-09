import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { auth } from '../Config/Firebase'
import { signOut } from "firebase/auth"

import textContext from './Context'
import { useContext,useEffect } from 'react'

export const Navbar = () => {

    const navigate=useNavigate();

    const c = useContext(textContext);
    const {authToken,setAuthToken, fetch} = c;
    
    const logout = async () => {
        await signOut(auth);
        localStorage.removeItem("token");
        navigate('/')
        window.location.reload();
    }
    
    

    return (
        <>
            <nav className='navbar px-3 bg-dark text-light' style={{height:"9vh", width:"100%"}}>
                <div className='container-fluid align-items-center'>

                <div className='me-auto p-1' style={{fontWeight:"bold"}}>Let's Code It</div>
                <div className='p-1' >{auth?.currentUser?.email}</div>
                <div className='p-1'>
                    {auth?.currentUser?.email!=null && <button onClick={logout} className='btn btn-outline-info'>Log Out</button>}
                    {auth?.currentUser?.email==null &&  <Link to="/login" className='btn btn-outline-info'>Log In</Link>}
                </div>

                </div>
            </nav>

        </>
    )
}
