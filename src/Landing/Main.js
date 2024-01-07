import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Typed from "react-typed"
import textContext from "../Components/Context"
import { useContext } from "react"

import lp1 from '../Images/laptopmale1.png'



import { auth } from "../Config/Firebase"
import { signOut } from "firebase/auth"

import codeLogo from "../Images/CodeDev logo.png"
import "../Components/style.css"
import "../Components/mobile.css"

const Main = () => {
  const c = useContext(textContext);
  const { loggedIn } = c;
  useEffect(() => {

    const logout = async () => {
      await signOut(auth);
    }
  }, [loggedIn])
  const w = window.innerWidth;

  return (
    <>
      <div className="screen ">
        <div className="codelogo">
          <img src={codeLogo} />
        </div>

        <div className="main">
          <h1 className="mainhead my-4">Your Code Playground.
            <br /> Always Online, Always Inspired.
          </h1>
          <Typed
            className='t2'
            strings={[`Built-in support for 
            HTML, CSS, and JavaScript`, `Cloud-based storage to access your 
            code anywhere.`, `Write beautiful code, faster,
          from any device`,
              `Focus on creation, not setup. We handle the rest..`]}
            typeSpeed={40}
            backSpeed={70}
            loop
          />
          {/* <p className="t3">Start coding now, for free.
            <br />
            No setup required</p> */}
        </div>
        <div className="login">

          <Link to="/home/*"><button className="btn-login">Try it !</button></Link>
          <Link to="/login"><button className="btn-login ">Get Started</button></Link>

        </div>
        <div className="person">
          <img src={lp1} />
        </div>


      </div>
    </>
  )
}

export default Main