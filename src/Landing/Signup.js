import React, { useState } from 'react'
import { auth, googleProvider } from '../Config/Firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import bgLogin from '../Images/bgLogin.jpg'
import { Link, useNavigate } from 'react-router-dom'

import textContext from '../Components/Context'
import { useContext } from 'react'

import google from '../Images/google1.png'
const Signup = () => {

  const navigate=useNavigate();

  const c = useContext(textContext);
  const { mail, setMail, password, setPassword, setAuthToken } = c;
  const [confirmPassword, setConfirmPassword] = useState('');

  const createUser = async () => {
    try {
      if (confirmPassword != password) console.log("Password Mismatch")
      else {
        await createUserWithEmailAndPassword(auth, mail, password);
        const userId = auth?.currentUser?.uid;
        console.log("i am uid", userId)
        setAuthToken(userId)
        localStorage.setItem("token",userId);
        navigate('/home/*')

      }
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
    <div className='complete_screen d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${bgLogin})`, backgroundRepeat: "no-repeat", height: "99vh" }}>
      <div className=' login_box containerrounded py-4 px-3 rounded' style={{ backgroundColor: "white", height: "80vh", width: "25vw" }} >



        {/* <div className="mb-3 row my-2 d-flex flex-column fw-semibold" style={{fontSize:"12px"}}>
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label mx-3">Name</label>
          <div className="col-sm-10">
            <input type="text" className="fs-6 form-control-plaintext mx-3 px-1 border-bottom" placeholder="Username" name='mail' onChange={onChange} style={{ fontFamily: 'Kanit' }} />
          </div>
        </div> */}
        <div className="mb-3 row my-2 d-flex flex-column fw-semibold" style={{ fontSize: "12px" }}>
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label mx-3">Email</label>
          <div className="col-sm-10">
            <input type="text" className="fs-6 form-control-plaintext mx-3 px-1 border-bottom" placeholder="email@example.com" name='mail' onChange={(e) => { setMail(e.target.value) }} style={{ fontFamily: 'Kanit' }} id="staticEmail" />
          </div>
        </div>
        <div className="mb-3 row my-2 d-flex flex-column fw-semibold" style={{ fontSize: "12px" }}>
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label mx-3">Password</label>
          <div className="col-sm-10">
            <input type="password" name='password' onChange={(e) => { setPassword(e.target.value) }} className="fs-6 form-control-plaintext mx-3 px-1 border-bottom" placeholder="Enter password" style={{ fontFamily: 'Kanit' }} />
          </div>
        </div>
        <div className="mb-3 row my-2 d-flex flex-column fw-semibold" style={{ fontSize: "12px" }}>
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label mx-3">Confirm Password</label>
          <div className="col-sm-10">
            <input type="password" className="fs-6 form-control-plaintext mx-3 px-1 border-bottom" placeholder="Enter password" onChange={(e) => { setConfirmPassword(e.target.value) }} style={{ fontFamily: 'Kanit' }} id="inputPassword" name='confirmPassword' />
          </div>
        </div>
        <div className="col-auto text-center my-5">
          <button type="submit" className="btn btn-primary border-0 me-2" style={{ width: "15vw", color: "rgb(64, 63, 61)", backgroundImage: `url(${bgLogin})` }} onClick={createUser}>SignUp</button>
          <button className='border-0 btn' onClick={googleLogin}><img src={google} style={{ width: "4vh" }}></img></button>
        </div>
        <div className="havent mx-5 my-2" style={{ color: "grey", fontSize: "14px" }}>Want to Login ?  <Link to="/login" className=" text-decoration-none" style={{ color: "black", fontSize: "14px" }}> Login In</Link></div>
      </div>
    </div>
  )
}

export default Signup