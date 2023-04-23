import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ce from '../Images/ce1.jpg'
import textContext from "../Components/Context"
import { useContext } from "react"

import code1 from '../Images/codi1.gif'
import code2 from '../Images/code2.gif'
import code3 from '../Images/code3.gif'


import { auth } from "../Config/Firebase"
import { signOut } from "firebase/auth"

const Main = () => {
  const c = useContext(textContext);
  const { loggedIn } = c;
  useEffect(() => {
    const logout = async () => {
      await signOut(auth);
    }
  }, [loggedIn])
  // code to show alert for few sec
  // useEffect(() => {
  //   setTimeout(() => {
  //     setshowAlert(false);
  //   }, 3000);
  // }, [])




  return (
    <>


      <div className=" screen bg-dark w-100 py-3 px-5 text-light " style={{ height: "100vh" }}>

        <div className="nav d-flex flex-row-reverse px-2">
          <Link to="/login"><button className="btn btn-outline-primary mx-3">Sign Up for Free</button></Link>
          <Link to="/home/*"><button className="btn btn-outline-secondary mx-3">Try Now</button></Link>
        </div>
        <div className="main">

          <div className="px-5 d-flex" style={{ fontFamily: "'Chivo Mono', monospace", fontSize: "5vh", marginTop: "12vh" }}>
            <img className="me-4 " src={ce} style={{ width: "4vw", height: "4vw" }}></img>
            <div>
              <p>The best place </p>
              <p>to build, </p>
              <p>and test </p>
              <p>front-end code .</p>

            </div>

            <div className="rounded ">
              <img src={code1} className="rounded position-absolute"  style={{width:"40vh", zIndex:3, right:"10vh",top:"25vh"}}></img>
              <img src={code2} className="rounded position-absolute"  style={{width:"40vh", zIndex:2, right:"45vh", top:"20vh"}}></img>
              <img src={code3} className="my-5 rounded position-absolute"  style={{width:"30vh",zIndex:1,right:"45vh", top:"50vh"}}></img>
            </div>

          </div>
          <div className="px-5 fs-5">
            <p>CodeDev is a social development environment</p>
            <p> for front-end designers and developers.</p>
          </div>
        </div>


      </div>
    </>
  )
}

export default Main