import React from 'react'
import { useContext, useState,useEffect } from 'react'
import textContext from './Components/Context'
import Main from './Landing/Main'
import Home from './Components/Home'
import Login from './Landing/Login'
import Signup from './Landing/Signup'
import Alert from './Components/Alert'
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom'

import Store from './Landing/Store'

const Parent = () => {
  const c = useContext(textContext);
  
  const { authToken} = c;

  const w = window.innerWidth;

  const [showAlert, setshowAlert] = useState(false);
  const [alertMsg, setalertMsg] = useState('') 
  useEffect(() => {

    if(authToken==''|| authToken==null){
      setalertMsg('Please Log In');
    }
    else{
      setalertMsg('Code Loading');
    }
    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
    }, 1000);

  }, [authToken])



  return (
    <>
      <HashRouter>
        {/* {!loggedIn && <Main />} */}
        <Store />
        {/* {(w<850) && <Alert message={"Please use PC for better user experience"} color={"danger"} />} */}
        {showAlert && <Alert message={alertMsg} color={"success"}/>}
        <div>
          <Routes>
            <Route exact path='/' element={<Main />}></Route>
            <Route exact path='/home/*' element={<Home />}></Route>
            <Route exact path='login' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
          </Routes>

        </div>
      </HashRouter>
    </>
  )
}

export default Parent