import React from 'react'
import { Navbar } from './Navbar'
import { Leftbar } from './Leftbar'
import { Page } from './Page'
import {
  Route,
  Routes
} from 'react-router-dom'
import Editor from './Editor';
import textContext from './Context';
import { useContext, useEffect } from 'react';
import './style.css'

const Home = () => {
  const c = useContext(textContext);
  const { html, css, js, setCss, setHtml, setJs, setAuthToken, fetch, authToken } = c;

  useEffect(() => {
// 
    setTimeout(() => {
      // console.log("i am home",localStorage.getItem("token"))
      setAuthToken(localStorage.getItem("token"))
      fetch();
    }, 2000);
  }, [authToken])


  return (
    <>
      <Navbar />
      <div className='d-flex flex-wrap '>
        <div>
          <Leftbar />
        </div>
        <div className='bothEditorPage'>

          <div className='mx-3'>
            <Routes>

              <Route path='*' element={<Editor language={"xml"} value={html} setValue={setHtml} />}></Route>
              <Route path='/html' element={<Editor language={"xml"} value={html} setValue={setHtml} />}></Route>

              <Route path='/css' element={<Editor language={"css"} value={css} setValue={setCss} />}></Route>

              <Route path='/js' element={<Editor language={"javascript"} value={js} setValue={setJs} />}></Route>
            </Routes>
          </div>
          <div className='bg-dark hide' id='pageDiv'>
            <Page />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home