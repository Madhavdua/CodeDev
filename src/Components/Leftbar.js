import React from 'react'
import { Link ,useLocation} from 'react-router-dom'

import textContext from './Context'
import { useContext, useState } from 'react'
import { useEffect } from 'react'


export const Leftbar = () => {

    const c = useContext(textContext);
    const { upload, authToken } = c;

    const [saved, setsaved] = useState(false)

    const location=useLocation();
    // console.log(location)

    const handleSave=()=>{
        if (authToken && authToken != '')setsaved(true);
        upload();
        setTimeout(() => {
            setsaved(false);
        }, 500);
    }

    const [status, setstatus] = useState('Login to save')
    useEffect(() => {
        if (authToken && authToken != '') setstatus("Save")
    }, [])

    const w=window.innerWidth;

    return (
        <>
            <div className={`border border-start-0 border-4 d-flex flex-${w>750?`column`:'row'} align-items-center py-${w>750?'4':'1'}` } style={w>750?{ minHeight: "88vh", position: "sticky", display: "block" }
            :{width:"100vw", height:"100%", justifyContent:"space-around"}
        }
            >


                
                <div className='items my-3' >
                    <button className='btn' type='button' data-toggle="tooltip" data-placement="top" title="HTML"  >
                        <Link to="html" className={`text-${location.pathname=="/home/html"||location.pathname=="/home/*"?"primary":"dark"}`} ><i className="fa-solid fa-code fa-2xl"></i></Link>
                    </button>
                </div>
                <div className='items my-3'>
                    <button className='btn text-dark' type='button' data-toggle="tooltip" data-placement="top" title="CSS"  >

                        <Link to="css" className={`text-${location.pathname=="/home/css"?"primary":"dark"}`}><i className="fa-brands fa-css3-alt fa-2xl"></i></Link>
                    </button>
                </div>
                <div className='items my-3'>
                    <button className='btn text-dark' type='button' data-toggle="tooltip" data-placement="top" title="JavaScript"  >

                        <Link to="js" className={` text-${location.pathname=="/home/js"?"primary":"dark"}`}><i className="fa-brands fa-js fa-2xl"></i></Link>
                    </button>
                </div>
                <div className='items my-3'>

                    {!saved && <button className='btn text-dark' type='button' data-toggle="tooltip" data-placement="top" title={status} onClick={handleSave}><i className="fa-regular fa-floppy-disk fa-2xl"></i></button>}
                    {saved &&<button className='btn text-dark' type='button' data-toggle="tooltip" data-placement="top" title={"Saved"}><i class="fa-solid fa-check fa-2xl"></i></button>}

                </div>
            </div>
        </>
    )
}
