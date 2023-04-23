import React from 'react'
import { Link } from 'react-router-dom';
import google from '../Images/google1.png'
import { useContext } from 'react'
import textContext from '../Components/Context';
import bgLogin from '../Images/bgLogin.jpg'

import { useNavigate } from 'react-router-dom';

import { auth, googleProvider } from '../Config/Firebase';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const Login = () => {
    // console.log(auth?.currentUser?.email)
    const navigate=useNavigate();

    const c = useContext(textContext);
    const { mail, setMail, password, setPassword, setAuthToken } = c;

    const mailLogin = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, mail, password);
            const userId = auth?.currentUser?.uid;
            console.log("i am uid", userId)
            setAuthToken(userId)
            localStorage.setItem("token",userId);
            navigate('/home/*')
            
        } catch (error) {
            console.log(error)
        }
    }
    
    const googleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            const userId = auth?.currentUser?.uid;
            console.log("i am uid", userId)
            setAuthToken(userId)
            localStorage.setItem("token",userId);
            navigate('/home/*')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='complete_screen d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${bgLogin})`, backgroundRepeat: "no-repeat", height: "100vh" }}>
            <div className='login_box containerrounded py-4 px-3 rounded' style={{ backgroundColor: "white", height: "70vh", minWidth: "25vw" }} >
                <div className='fs-4 fw-bold top text-center my-2  '>
                    Login
                </div>
                <div className="mb-3 row my-2 d-flex flex-column fw-semibold" style={{ fontSize: "12px" }}>

                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label mx-3">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="fs-6 form-control-plaintext mx-3 px-1 border-bottom" placeholder="email@example.com" name='mail' onChange={(e) => { setMail(e.target.value) }} style={{ fontFamily: 'Kanit' }} />
                    </div>
                </div>
                <div className="mb-3 row my-2 d-flex flex-column fw-semibold" style={{ fontSize: "12px" }}>
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label mx-3">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control-plaintext mx-3 px-1 border-bottom" id="inputPassword" name='password' onChange={(e) => setPassword(e.target.value)} placeholder='Type your password' />
                    </div>
                </div>
                <div className="col-auto text-center my-5">
                    <button type="submit" className="btn btn-primary border-0 me-2" style={{ width: "16vw", color: "rgb(64, 63, 61)", backgroundImage: `url(${bgLogin})` }} onClick={mailLogin}>Login</button>
                    <button className='border-0 btn' onClick={ googleLogin}><img src={google} style={{ width: "4vh" }}></img></button>
                </div>

                <div className="havent mx-5 my-2" style={{ color: "grey", fontSize: "14px" }}>
                </div>
                <div className="havent mx-5 my-2" style={{color:"grey" ,fontSize:"14px"}}>Haven't sign up? <Link to="/signup" className=" text-decoration-none" style={{color:"black", fontSize:"14px"}}>Sign Up</Link></div>
            </div>
        </div>
    )
}

export default Login