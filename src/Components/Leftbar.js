import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import textContext from './Context'
import { useContext, useState } from 'react'
import { useEffect } from 'react'

import './style.css'
import htmlimg from "../Images/3dhtml.png"
import cssimg from "../Images/3dcss.png"
import jsimg from "../Images/3djs.png"
import saveimg from "../Images/3dsave.png"
import viewimg from "../Images/3deye.png"

export const Leftbar = () => {

    const c = useContext(textContext);
    const { upload, authToken } = c;

    const [saved, setsaved] = useState(false)

    const location = useLocation();
    // console.log(location)

    const handleSave = () => {
        if (authToken && authToken != '') setsaved(true);
        upload();
        setTimeout(() => {
            setsaved(false);
        }, 500);
    }

    const displayOutput = () => {
        const pageDiv = document.getElementById('pageDiv');
        pageDiv.classList.toggle("hide");
    }

    const [status, setstatus] = useState('Login to save')
    useEffect(() => {
        if (authToken && authToken != '') setstatus("Save")
    }, [])

    const w = window.innerWidth;

    return (
        <>
            <div className={` border-end border-5  d-flex flex-${w > 900 ? `column` : 'row'} align-items-center`} style={w > 900 ? { minHeight: "90vh", position: "sticky", display: "block" }
                : { width: "100vw", height: "auto", justifyContent: "space-around" }
            }
            >
                <div className='items my-2' >
                    <button className='btn' type='button' data-toggle="tooltip" data-placement="top" title="HTML"  >
                        <Link to="html" className={`text-${location.pathname === "/home/html" || location.pathname === "/home/*" ? "primary" : "dark"}`} >
                            <img className='items-img' src={htmlimg} />
                        </Link>
                    </button>
                </div>
                <div className='items my-2'>
                    <button className='btn text-dark' type='button' data-toggle="tooltip" data-placement="top" title="CSS"  >

                        <Link to="css" className={`text-${location.pathname === "/home/css" ? "primary" : "dark"}`}><img className='items-img' src={cssimg} /></Link>
                    </button>
                </div>
                <div className='items my-2'>
                    <button className='btn text-dark' type='button' data-toggle="tooltip" data-placement="top" title="JavaScript"  >

                        <Link to="js" className={` text-${location.pathname === "/home/js" ? "primary" : "dark"}`}><img className='items-img' src={jsimg} /></Link>
                    </button>
                </div>
                <div className='items my-2'>

                    {!saved && <button className='btn text-dark' type='button' data-toggle="tooltip" data-placement="top" title={status} onClick={handleSave}><img className='items-img' src={saveimg}/></button>}
                    {saved && <button className='btn text-dark' type='button' data-toggle="tooltip" data-placement="top" title={"Saved"}><img className='items-img' src={saveimg}/></button>}

                </div>
                <div className='items my-2'></div>
                <button className='btn text-dark' type='button' data-toggle="tooltip" data-placement="top" title="View" onClick={displayOutput} >
                    <img className='items-img' src={viewimg} />
                </button>
            </div>
        </>
    )
}
