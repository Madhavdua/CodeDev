import React from 'react'
import { Navbar } from './Navbar'
import { Leftbar } from './Leftbar'
import { Page } from './Page'
import { auth } from '../Config/Firebase';
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom'
import Editor from './Editor';
import textContext from './Context';
import { useContext,useEffect } from 'react';


const Home = () => {
  const c = useContext(textContext);
  const { html, css, js, setCss, setHtml, setJs , setAuthToken,fetch,authToken} = c;   


  
// console.log("i am home",auth?.currentUser?.email);
useEffect(() => {
  
  setTimeout(() => {
    // console.log("i am home",localStorage.getItem("token"))
    setAuthToken(localStorage.getItem("token"))
    // console.log("i am auth token",authToken);
    if(authToken!='')fetch();
    
    // fetch()
  }, 2000);
}, [authToken])




  return (
    <>
          <Navbar/>
          <div className='d-flex flex-wrap justify-content-center'>
            <div>
              <Leftbar />
            </div>
            <div className='bg-dark' style={{height:"88vh", width:""}}>
              <Routes>

                <Route  path='*' element={<Editor language={"xml"}  value={html} setValue={setHtml}/>}></Route>
                <Route  path='/html' element={<Editor language={"xml"}  value={html} setValue={setHtml}/>}></Route>

                <Route  path='/css' element={<Editor language={"css"}  value={css} setValue={setCss}/>}></Route>

                <Route  path='/js' element={<Editor language={"javascript"}  value={js} setValue={setJs} />}></Route>

                {/* <Route exact path='/res' element={<Page />}>
                </Route> */}
              </Routes>
            </div>
            <div className='bg-dark' style={{height:"88vh"}}>
                <Page/>
            </div>
          </div>
    </>
  )
}

export default Home